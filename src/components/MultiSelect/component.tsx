"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge, Check, ChevronDown, Search, WandSparkles, X, XCircle } from "lucide-react";
import { Button } from "../Button";
import { cn } from "@/lib";
import { Separator } from "../Separator";

const multiSelectVariants = cva("m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", {
  variants: {
    variant: {
      default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
      secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      inverted: "inverted",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const MultiSelectRoot = PopoverPrimitive.Root;

const MultiSelectTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> & {
    selectedValues: string[];
    options: MultiSelectOption[];
    placeholder?: string;
    maxCount?: number;
    variant?: VariantProps<typeof multiSelectVariants>["variant"];
    animation?: number;
    isAnimating?: boolean;
    onClear: () => void;
    onToggleOption: (value: string) => void;
    onClearExtra: () => void;
  }
>(
  (
    {
      className,
      selectedValues,
      options,
      placeholder = "Selecionar opções",
      maxCount = 3,
      variant,
      animation = 0,
      isAnimating = false,
      onClear,
      onToggleOption,
      onClearExtra,
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Trigger ref={ref} asChild {...props}>
      <Button
        variant="outline"
        role="combobox"
        className={cn(
          "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto",
          className
        )}
      >
        {selectedValues.length > 0 ? (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-wrap items-center">
              {selectedValues.slice(0, maxCount).map((value) => {
                const option = options.find((o) => o.value === value);
                const IconComponent = option?.icon;
                return (
                  <Badge
                    key={value}
                    className={cn(isAnimating ? "animate-bounce" : "", multiSelectVariants({ variant }))}
                    style={{ animationDuration: `${animation}s` }}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                    {option?.label}
                    <XCircle
                      className="ml-2 h-4 w-4 cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        onToggleOption(value);
                      }}
                    />
                  </Badge>
                );
              })}
              {selectedValues.length > maxCount && (
                <Badge
                  className={cn(
                    "bg-field text-foreground border-foreground/1 hover:bg-field",
                    isAnimating ? "animate-bounce" : "",
                    multiSelectVariants({ variant })
                  )}
                  style={{ animationDuration: `${animation}s` }}
                >
                  {`+ ${selectedValues.length - maxCount} mais`}
                  <XCircle
                    className="ml-2 h-4 w-4 cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      onClearExtra();
                    }}
                  />
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <X
                className="h-4 mx-2 cursor-pointer text-muted-foreground"
                onClick={(event) => {
                  event.stopPropagation();
                  onClear();
                }}
              />
              <Separator orientation="vertical" className="flex min-h-6 h-full" />
              <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full mx-auto">
            <span className="text-sm text-muted-foreground mx-3">{placeholder}</span>
            <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
          </div>
        )}
      </Button>
    </PopoverPrimitive.Trigger>
  )
);
MultiSelectTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const MultiSelectContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(
  ({ className, align = "start", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-0 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
MultiSelectContent.displayName = PopoverPrimitive.Content.displayName;

const MultiSelectSearch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  }
>(({ className, onKeyDown, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-field py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onKeyDown={onKeyDown}
      {...props}
    />
  </div>
));
MultiSelectSearch.displayName = "MultiSelectSearch";

const MultiSelectList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("max-h-[200px] overflow-auto p-1", className)} {...props} />
));
MultiSelectList.displayName = "MultiSelectList";

const MultiSelectEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-6 text-center text-sm text-muted-foreground", className)} {...props} />
));
MultiSelectEmpty.displayName = "MultiSelectEmpty";

const MultiSelectGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("overflow-hidden p-1 text-foreground", className)} {...props} />
));
MultiSelectGroup.displayName = "MultiSelectGroup";

const MultiSelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onSelect?: () => void;
    isSelected?: boolean;
    option?: MultiSelectOption;
  }
>(({ className, onSelect, isSelected = false, option, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "cursor-pointer",
      className
    )}
    onClick={onSelect}
    {...props}
  >
    <div
      className={cn(
        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
      )}
    >
      <Check className="h-4 w-4" />
    </div>
    {option?.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
    <span>{children}</span>
  </div>
));
MultiSelectItem.displayName = "MultiSelectItem";

const MultiSelectSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MultiSelectSeparator.displayName = "MultiSelectSeparator";

const MultiSelectAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onSelect?: () => void;
  }
>(({ className, onSelect, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
      "cursor-pointer justify-center",
      className
    )}
    onClick={onSelect}
    {...props}
  />
));
MultiSelectAction.displayName = "MultiSelectAction";

interface MultiSelectOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface MultiSelectProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>, VariantProps<typeof multiSelectVariants> {
  options: MultiSelectOption[];
  onValueChange: (value: string[]) => void;
  defaultValue?: string[];
  placeholder?: string;
  animation?: number;
  maxCount?: number;
  modalPopover?: boolean;
  className?: string;
}

const MultiSelect = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Trigger>, MultiSelectProps>(
  (
    {
      options,
      onValueChange,
      variant,
      defaultValue = [],
      placeholder = "Selecionar opções",
      animation = 0,
      maxCount = 3,
      modalPopover = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const filteredOptions = React.useMemo(() => {
      if (!searchValue) return options;
      return options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    }, [options, searchValue]);

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option) ? selectedValues.filter((value) => value !== option) : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

    return (
      <div className="relative">
        <MultiSelectRoot open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover} {...props}>
          <MultiSelectTrigger
            ref={ref}
            className={className}
            selectedValues={selectedValues}
            options={options}
            placeholder={placeholder}
            maxCount={maxCount}
            variant={variant}
            animation={animation}
            isAnimating={isAnimating}
            onClear={handleClear}
            onToggleOption={toggleOption}
            onClearExtra={clearExtraOptions}
          />
          <MultiSelectContent>
            <MultiSelectSearch placeholder="Buscar..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleInputKeyDown} />
            <MultiSelectList>
              {filteredOptions.length === 0 ? (
                <MultiSelectEmpty>Nenhum resultado encontrado.</MultiSelectEmpty>
              ) : (
                <>
                  <MultiSelectGroup>
                    <MultiSelectItem onSelect={toggleAll} isSelected={selectedValues.length === options.length}>
                      (Selecionar Todos)
                    </MultiSelectItem>
                    {filteredOptions.map((option) => {
                      const isSelected = selectedValues.includes(option.value);
                      return (
                        <MultiSelectItem key={option.value} onSelect={() => toggleOption(option.value)} isSelected={isSelected} option={option}>
                          {option.label}
                        </MultiSelectItem>
                      );
                    })}
                  </MultiSelectGroup>
                  <MultiSelectSeparator />
                  <MultiSelectGroup>
                    <div className="flex items-center justify-between">
                      {selectedValues.length > 0 && (
                        <>
                          <MultiSelectAction onSelect={handleClear} className="flex-1">
                            Limpar
                          </MultiSelectAction>
                          <Separator orientation="vertical" className="flex min-h-6 h-full" />
                        </>
                      )}
                      <MultiSelectAction onSelect={() => setIsPopoverOpen(false)} className="flex-1 max-w-full">
                        Fechar
                      </MultiSelectAction>
                    </div>
                  </MultiSelectGroup>
                </>
              )}
            </MultiSelectList>
          </MultiSelectContent>
        </MultiSelectRoot>
        {animation > 0 && selectedValues.length > 0 && (
          <WandSparkles
            className={cn("cursor-pointer my-2 text-foreground bg-background w-3 h-3", isAnimating ? "" : "text-muted-foreground")}
            onClick={() => setIsAnimating(!isAnimating)}
          />
        )}
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

export {
  MultiSelect,
  MultiSelectAction,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectRoot,
  MultiSelectSearch,
  MultiSelectSeparator,
  MultiSelectTrigger,
  type MultiSelectOption,
  type MultiSelectProps,
};
