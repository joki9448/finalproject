import FramesList from './FramesList';
import BrandsList from './BrandsList';
import FxList from './FxList'

function Menu({
                isFramesSelectVisible,
                setIsFramesSelectVisible,
                framesList,
                setSelectedFrame,
                setIsFrameSelected,
                brandsList,
                isBrandsListVisible,
                setIsBrandsListVisible,
                setSelectedBrand,
                effectsList,
                isFXListVisible,
                setIsFXListVisible,
                setSelectedEffect,
                handleModelClick,
            }){
                
    return (
        <div className="menu-container">
            {/* <h1 className="menu-header">Menu</h1> */}
            <div className="frames-dropdown" onMouseEnter={() => {setIsFramesSelectVisible(true)}} onMouseLeave={() => {setIsFramesSelectVisible(false)}}>
                Select Board
                {isFramesSelectVisible ? <FramesList 
                    framesList={framesList}
                    setSelectedFrame={setSelectedFrame}
                    setIsFrameSelected={setIsFrameSelected}
                /> 
                : null}
            </div>
            <div className="frames-dropdown" onMouseEnter={() => {setIsBrandsListVisible(true)}} onMouseLeave={() => {setIsBrandsListVisible(false)}}>
                Select Brand
                {isBrandsListVisible ? <BrandsList 
                    brandsList={brandsList}
                    setSelectedBrand={setSelectedBrand}
                /> 
                : null}
            </div>
            <div className="frames-dropdown" onMouseEnter={() => {setIsFXListVisible(true)}} onMouseLeave={() => {setIsFXListVisible(false)}}>
                Select Effect
                {isFXListVisible ? <FxList 
                    effectsList={effectsList}
                    setSelectedEffect={setSelectedEffect}
                /> 
                : null}
            </div>
            <button className="menu-pedals-button"onClick={() => {handleModelClick()}}>Browse Pedals</button>
        </div>
    )
}

export default Menu;