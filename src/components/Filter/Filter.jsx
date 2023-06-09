import { Label, Input } from 'components/Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import { selectFilter } from 'store/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = ({ target: { value } }) => {
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
          onChange={handleClick}
        />
      </Label>
    </>
  );
};
