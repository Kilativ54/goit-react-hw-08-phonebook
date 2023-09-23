import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Label, Input } from './Filte.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <div>
      <Label>Find contacts by Name </Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={onChangeFilter}
        value={filter}
      />
    </div>
  );
}
