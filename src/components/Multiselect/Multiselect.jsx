import { useLayoutEffect, useRef, useState, useId } from "react";
import { AiOutlineDown } from 'react-icons/ai';

import DropDownMenu from "./DropDownMenu";
import ReferenceBlock from "./ReferenceBlock";
import SelectedOption from "./SelectedOption";
import Separator from "./Separator";

import theme from "helper/theme";
import { DropDownBtn, Select } from "./Multiselect.styled";

const Multiselect = () => {
    const id = useId();
    const data = [{ id: `${id}-red`, text: "red" }, { id: `${id}-ocean`, text: "ocean" }, { id: `${id}-orange`, text: "orange" }, { id: `${id}-purple`, text: "purple" }, { id: `${id}-yellow`, text: "yellow" }, { id: `${id}-green`, text: "green" }, { id: `${id}-azure`, text: "azure" }, { id: `${id}-violet`, text: "violet" }, { id: `${id}-transparent`, text: "transparent" }, { id: `${id}-silver`, text: "silver" }];
    const { sizes: { select, selectedOption } } = theme;
  
    const [options, setOptions] = useState(data);
    const [selectedItems, setSelectedItems] = useState([]);

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isShownOther, setIsShownOther] = useState(false);

    const [counter, setCounter] = useState(0);

    const [spaceRoomInSelect, setSpaceRoomInSelect] = useState();

    const selectEl = useRef(null);
    const referenseBlock = useRef(null);
    const separatorBlock = useRef(null);

    const [selectedElsWidth, setSelectedElsWidth] = useState();
    const [separatorWidth, setSeparatorWidth] = useState();
    

  useLayoutEffect(() => {
      const contentSpaceWidth = getSubtracted(selectEl.current.offsetWidth, select.getConstantWidth());

        setSpaceRoomInSelect(contentSpaceWidth);
        setSelectedElsWidth([...referenseBlock.current.childNodes].reduce((acc, el) => {
            return {...acc, [el.id]: el.offsetWidth + selectedOption.margin}
        }, {}));
    setSeparatorWidth(getTotalWidth([...separatorBlock.current.childNodes].map(el => el.offsetWidth), selectedOption.margin));

    if (selectedItems.length === 0) return;
   
    const selectChildren = [...selectEl.current.childNodes];
    const optionsWidthsArray = [...selectEl.current.childNodes].slice(0, selectChildren.length - 1).map(el => el.offsetWidth);

    setSpaceRoomInSelect(getSubtracted(contentSpaceWidth, getTotalWidth(optionsWidthsArray, selectedOption.margin)));
    setCounter(selectedItems.filter(item => item.hidden).length);

  }, [selectedItems]);

  
  function toggleMenu() {
    setIsOpenMenu(prev => !prev);
  }

  function onMenu(e) {
    if ((getSubtracted(spaceRoomInSelect, separatorWidth)) >= selectedElsWidth[e.target.id]) {
     
      setSelectedItems(prev => [...prev, { id: e.target.id, text: e.target.dataset.value, hidden: false }]);
      if (selectedItems.some(item => item.hidden)) {
        setIsShownOther(true);
      } else {
         setIsShownOther(false);
      }
    } else {
      setSelectedItems(prev => [...prev, { id: e.target.id, text: e.target.dataset.value, hidden: true }]);
      setIsShownOther(true);
    }
    setOptions(prev => prev.filter(item => item.id !== e.target.id));
  }

  function onDeleteSelectedItem(e) {
    setSelectedItems(prev => prev.filter(item => item.id !== e.target.id));
    setOptions(prev => [...prev, { id: e.target.id, text: e.target.dataset.value }]);

    if (counter !== 0) {
      const updateSpareRoom = getSum(spaceRoomInSelect, selectedElsWidth[e.target.id]);
      const makeVisibleEl = selectedItems.find(el => el.hidden && selectedElsWidth[el.id] < updateSpareRoom);
      if (makeVisibleEl) {
        setCounter(prev => prev -= 1);
        setSelectedItems(prev => {
          const updateArr = prev.filter(item => item.id !== makeVisibleEl.id);
          return [...updateArr, { ...makeVisibleEl, hidden: false }];
        });
      }
    }
  }
    
    function getTotalWidth(widthsArr, margin) {
        return widthsArr.reduce((acc, width) => acc += width + margin, 0);
    }

    function getSubtracted(value1, value2) {
        return Number(value1) - Number(value2);
    }

    function getSum(value1, value2) {
        return value1 + value2;
    }

  
    return (
    <>
        <Select ref={selectEl}>
                
            {selectedItems.length !== 0 ? selectedItems.map(item => {
                if (!item.hidden) {
                    return <SelectedOption key={item.id} item={item} onDeleteSelectedItem={onDeleteSelectedItem} />
                } 
                return null;
                }) : <span>choose options</span>
            }
                
            {(isShownOther && counter > 0) && <Separator counter={counter} />}
            <DropDownBtn type="button" onClick={toggleMenu}><AiOutlineDown /></DropDownBtn>

            {isOpenMenu && <DropDownMenu onMenu={onMenu} options={options} />}
        </Select>
            
        <ReferenceBlock referense={referenseBlock}>
                {data.map(item => <SelectedOption key={item.id} item={item} />)}
        </ReferenceBlock>
        
        <ReferenceBlock referense={separatorBlock}>
            <Separator counter={counter} />
        </ReferenceBlock> 
    </>
  );
}

export default Multiselect;
