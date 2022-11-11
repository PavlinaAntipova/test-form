import { AiOutlineClose } from 'react-icons/ai';
import { RemoveBtn, StyledSelectedOption } from './SelectedOption.styled';

const SelectedOption = ({ item, onDeleteSelectedItem, s }) => { 
    return <StyledSelectedOption id={item.id}><span>{item.text}</span><RemoveBtn data-value={item.text} id={item.id} type="button" onClick={onDeleteSelectedItem}><AiOutlineClose /></RemoveBtn></StyledSelectedOption>
}

export default SelectedOption;