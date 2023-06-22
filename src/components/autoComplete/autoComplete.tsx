import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Option } from '../option';
import {
  AutoCompleteWrapper,
  AutoCompleteLabel,
  AutoCompleteSearchButton,
  AutoCompleteInput,
  AutoCompleteDatalist,
} from './autoComplete.style';
import { AutoCompleteProps, Option as OptionTypes } from '../../types';

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  loading,
  setSearchValue,
  name,
  setSelectedOption,
  value,
}: AutoCompleteProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSelectOption = (option: OptionTypes) => {
    setSelectedOption(option);
    setSearchValue(option?.title);

    setOpen(false);
  };

  return (
    <AutoCompleteWrapper>
      <AutoCompleteLabel htmlFor={name}>Products:</AutoCompleteLabel>

      <AutoCompleteWrapper>
        <AutoCompleteInput
          onFocus={() => setOpen(true)}
          type="search"
          id={name}
          name={name}
          placeholder="Search for product"
          value={value}
          onChange={handleSearchChange}
        />
        {open && (
          <AutoCompleteDatalist>
            {loading && <div>loading</div>}
            {options?.length === 0 && !loading && <div>Not Found</div>}
            {options?.map((option, index) => (
              <Option
                key={index}
                option={option}
                onClick={handleSelectOption}
              />
            ))}
          </AutoCompleteDatalist>
        )}

        <AutoCompleteSearchButton>
          <AiOutlineSearch />
        </AutoCompleteSearchButton>
      </AutoCompleteWrapper>
    </AutoCompleteWrapper>
  );
};
