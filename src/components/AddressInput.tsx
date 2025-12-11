import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ADDRESS_SUGGESTIONS } from "@/data/addresses";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AddressInputProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    placeholder?: string;
    className?: string;
}

const PLACEHOLDER_EXAMPLES = [
    "Dubai (UAE): Villa No: 5A, Al Wasl Road, Near Dubai Marina Mall",
    "Madurai: Door No: 14, Simmakkal Road, Opposite Meenakshi Temple",
    "Kochi: House No: 8/24, Chittoor Road, Near Ernakalam Market",
    "Chennai: Door No: 22, 2nd Cross Street, Near Vinayagar Temple",
    "Delhi: Flat No: 301, B Block, Janpath Road, Near Connaught Place",
    "Toronto: Unit 1204, 25 King Street West, Near Union Station",
];

const AddressInput = ({
    id,
    label,
    value,
    onChange,
    required = false,
    className,
}: AddressInputProps) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_EXAMPLES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);

        if (newValue.length > 0) {
            const filtered = ADDRESS_SUGGESTIONS.filter((addr) =>
                addr.toLowerCase().includes(newValue.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        onChange(suggestion);
        setShowSuggestions(false);
    };

    const highlightMatch = (text: string, query: string) => {
        if (!query || query.length < 1) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) =>
                    part.toLowerCase() === query.toLowerCase() ? (
                        <span key={i} className="font-bold text-primary">{part}</span>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </span>
        );
    };

    return (
        <div className={cn("space-y-2 relative", className)} ref={containerRef}>
            <label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-primary">*</span>}
            </label>

            <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300 z-10">
                    <MapPin className="w-4 h-4" />
                </div>

                <div className="relative">
                    <Input
                        id={id}
                        ref={inputRef}
                        value={value}
                        onChange={handleInputChange}
                        onFocus={() => {
                            if (value.length > 0) setShowSuggestions(true);
                        }}
                        required={required}
                        className="pl-9 bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base md:text-sm py-3 relative z-10"
                        placeholder=""
                        autoComplete="off"
                    />

                    {/* Dynamic Placeholder Animation */}
                    <AnimatePresence mode="wait">
                        {value.length === 0 && (
                            <motion.div
                                key={placeholderIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute left-9 top-0 bottom-0 flex items-center text-gray-400 text-sm pointer-events-none w-[calc(100%-40px)] overflow-hidden whitespace-nowrap mask-linear-gradient z-20"
                            >
                                <span className="truncate opacity-60 italic">
                                    Ex: {PLACEHOLDER_EXAMPLES[placeholderIndex]}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto origin-top"
                        >
                            <ul className="py-2">
                                {suggestions.map((suggestion, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-none last:mb-0 transition-colors flex items-start gap-3"
                                    >
                                        <MapPin className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                                        <span className="leading-snug">
                                            {highlightMatch(suggestion, value)}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AddressInput;
