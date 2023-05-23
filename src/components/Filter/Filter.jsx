import { Label, Input } from 'components/Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import { getFilter } from 'store/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onKeyClick = ({ target: { value } }) => {
    dispatch(updateFilterValue(value));
  };

  return (
    <>
      <Label className="margin-top30">
        Find contacts by name
        <Input
          className="margin-bottom0"
          value={filter}
          type="text"
          name="filter"
          onChange={onKeyClick}
        />
      </Label>
    </>
  );
};
