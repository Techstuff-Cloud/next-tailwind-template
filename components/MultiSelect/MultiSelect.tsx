import {
  useState,
  useEffect,
  useRef,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from 'react';

export default function MultiSelectDropdown({
  formFieldName,
  options,
  value,
  onChange,
  prompt = 'Select one or more options',
}) {
  const [isJsEnabled, setIsJsEnabled] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const optionsListRef = useRef(null);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const option = e.target.value;

    const selectedOptionSet = new Set(selectedOptions);

    if (isChecked) {
      selectedOptionSet.add(option);
    } else {
      selectedOptionSet.delete(option);
    }

    const newSelectedOptions = Array.from(selectedOptionSet);

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const isSelectAllEnabled = selectedOptions.length < options.length;

  const handleSelectAllClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const optionsInputs = optionsListRef.current.querySelectorAll('input');
    optionsInputs.forEach((input: { checked: boolean }) => {
      input.checked = true;
    });

    setSelectedOptions([...options]);
    onChange([...options]);
  };

  const isClearSelectionEnabled = selectedOptions.length > 0;

  const handleClearSelectionClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const optionsInputs = optionsListRef.current.querySelectorAll('input');
    optionsInputs.forEach((input: { checked: boolean }) => {
      input.checked = false;
    });

    setSelectedOptions([]);
    onChange([]);
  };

  useEffect(() => {
    if (value.length > 0) setSelectedOptions(value);
  }, []);

  return (
    <label className='relative'>
      <input type='checkbox' className='hidden peer' />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform inline-flex border rounded px-5 py-2">
        {prompt}
        {isJsEnabled && selectedOptions.length > 0 && (
          <span className='ml-1 text-blue-500'>{`(${selectedOptions.length} selected)`}</span>
        )}
      </div>

      <div className='absolute dark:bg-white bg:text-white text-primary-500 bg-red-400 z-50 border transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto w-full max-h-60 overflow-y-scroll'>
        {isJsEnabled && (
          <ul>
            <li>
              <button
                onClick={handleSelectAllClick}
                disabled={!isSelectAllEnabled}
                className='w-full text-left px-2 py-1 text-blue-600 disabled:opacity-50'
              >
                {'Select All'}
              </button>
            </li>
            <li>
              <button
                onClick={handleClearSelectionClick}
                disabled={!isClearSelectionEnabled}
                className='w-full text-left px-2 py-1 text-blue-600 disabled:opacity-50'
              >
                {'Clear selection'}
              </button>
            </li>
          </ul>
        )}
        <ul ref={optionsListRef}>
          {options.map(
            (
              option:
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | Key
                | null
                | undefined,
              i: any
            ) => {
              return (
                <li key={option}>
                  <label
                    className={`flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200`}
                  >
                    <input
                      checked={selectedOptions.includes(option)}
                      type='checkbox'
                      name={formFieldName}
                      value={option}
                      className='cursor-pointer'
                      onChange={handleChange}
                    />
                    <span className='ml-1'>{option}</span>
                  </label>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </label>
  );
}
