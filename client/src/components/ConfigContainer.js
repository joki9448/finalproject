// import ConfigItem from './ConfigItem';

function ConfigContainer({ configs, isTextVisible }) {
    // console.log('configs post map', configs.chain)
    let savedConfigs = configs.chain
    console.log('savedconfigs', savedConfigs)
    // const { brand, model, effect } = configs

    return (
        <div>
            {savedConfigs.map((e) => {
                console.log('savedconfigs', e)
            })}
            {/* <img
                className="config-item"
                src={`/images/${brand.replace(' ', '-').toLowerCase()}/${effect.replace(' / ', '-').toLowerCase()}/${model.replace(' ', '-').toLowerCase()}.jpeg`}
            />
            <div className="model-text">{isTextVisible ? model : null}</div>
            <div className="effect-text">{isTextVisible ? effect : null}</div> */}
        </div>
    )
}

export default ConfigContainer;