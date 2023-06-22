import React from 'react';
import { Option as OptionType } from '../../types/index';
import {
  AutoCompleteDatalistOption,
  AutoCompleteOptionImage,
  AutoCompleteOptionWrapper,
  AutoCompleteOptionTitle,
} from './option.style';

export const Option: React.FC<{
  option: OptionType;
  onClick: (option: OptionType) => void;
}> = ({ option, onClick }) => {
  return (
    <AutoCompleteDatalistOption
      id="option"
      value={option.id}
      onClick={() => {
        onClick(option);
      }}
    >
      <AutoCompleteOptionWrapper>
        <AutoCompleteOptionImage
          src={option.thumbnail}
          alt={option.description}
        />
        <AutoCompleteOptionTitle>{option.title}</AutoCompleteOptionTitle>
      </AutoCompleteOptionWrapper>
    </AutoCompleteDatalistOption>
  );
};
