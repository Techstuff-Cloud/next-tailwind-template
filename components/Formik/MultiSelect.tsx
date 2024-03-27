import * as React from 'react';
import { Check, ChevronsUpDown, Option } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Option = {
  value: string;
  label: string;
};

type MultiSelectProp = {
  value: any[];
  name: string;
  options: Option[];
  onChange: (option: any[]) => void;
};

export function MultiSelectDemo({
  name,
  value,
  options,
  onChange,
}: MultiSelectProp) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>(value);

  const handleToggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
      onChange(selectedValues.filter((val) => val !== value));
    } else {
      onChange([...selectedValues, value]);
      setSelectedValues([...selectedValues, value]);
    }
  };

  const truncatedSelectedValues =
    selectedValues.length > 3
      ? selectedValues.slice(0, 3).join(', ') + '...'
      : selectedValues.join(', ');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='w-full'>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between overflow-hidden'
          title={truncatedSelectedValues}
        >
          {truncatedSelectedValues || 'Select framework(s)...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='!w-full !p-0'>
        <Command>
          <CommandInput name={name} placeholder='Search framework...' />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className='!w-full'>
            {options.map((option: Option) => (
              <CommandItem
                className='!w-full'
                key={option.value}
                value={option.value}
                onSelect={() => handleToggleOption(option.value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedValues.includes(option.value)
                      ? 'opacity-100'
                      : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
