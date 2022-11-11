import { Menu, MenuBtn } from './DropDownMenu.styled';

const DropDownMenu = ({ onMenu, options }) => { 
    
    return <Menu onClick={onMenu}>
          {options.length !== 0 ? options.map(item => <MenuBtn type="button" key={item.id} data-value={item.text} id={item.id}><span>{item.text}</span></MenuBtn>) : 'no options'}
        </Menu>
}

export default DropDownMenu;