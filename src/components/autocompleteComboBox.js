import React, { useState } from 'react';
import {TextField, Autocomplete} from '@mui/material';

export const AutocompleteMultipleSelect = (props) => {
  const [limitTags] = useState(3);
  const { topics } = props;
  const isOptionEqualToValue = (option, value) => { return option.id === value.id}
  const [value, setValue] = useState([]);

  const onChange = (event, values) => {
    setValue(values);
    if (values.length > 0) {
      props.setSelectedTopics(values.map((val) => val.name));
    } else {
      props.setSelectedTopics([]);
      setValue([]);
    }
  };

  React.useEffect(()=>{
        const filteredSelectedOptions = value.filter((val) =>
            topics.some((topic) => val.id === topic.id)
          );
        setValue(filteredSelectedOptions);
  },[topics])

  return (
    <div>

      <Autocomplete
        id={"combo-box-" + props.labelName}
        autoSelect
        multiple 
        options={topics}
        style={{
          width: '100%',
          minWidth: 200,
          maxWidth: 450
        }}
        getOptionLabel={(option) => option.name}
        noOptionsText="Choose listed options"
        value={value}
        limitTags={limitTags}
        isOptionEqualToValue={isOptionEqualToValue}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
          {...params}
          label={props.labelName[0].toUpperCase() + props.labelName.slice(1)}
          variant="outlined"
        />
        )}
      />
    </div>
  );
};