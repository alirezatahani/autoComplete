import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { AutoComplete as _AutoComplete } from './autoComplete';
import useFetch from 'src/hooks/useFetch';
import { useActiveElement } from 'src/hooks/useActiveElement';
import { Option as OptionTypes } from '../../types';

export const AutoComplete: React.FC<{
  name: string;
  url: string;
  onChange: (option: OptionTypes) => void;
}> = ({ name, url, onChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<OptionTypes>(null);

  const [{ loading, data }, fetchProducts] = useFetch();

  const focusedElement = useActiveElement();

  useEffect(() => {
    if (focusedElement?.name === name) {
      debounce(() => {
        fetchProducts({
          url: `${url}/search?q=${searchValue}`,
          method: 'get',
        });
      }, 400)();
    }
  }, [focusedElement, searchValue]);

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption);
    }
  }, [selectedOption]);

  console.log(searchValue, 'searchValue');
  return (
    <_AutoComplete
      name={name}
      options={data?.products ?? []}
      loading={loading}
      value={searchValue}
      setSearchValue={setSearchValue}
      setSelectedOption={setSelectedOption}
    />
  );
};
