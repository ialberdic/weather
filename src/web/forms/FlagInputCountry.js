import React, { Component, Fragment } from 'react';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import validator from 'validator';

const FLAG_SELECTOR_OPTION_LIST = [
    { id: '1', name: 'US', displayText: 'US(1)', locale: 'en-US', flag: require('../image/flags/us.svg') },
    { id: '86', name: '中国', displayText: '中国(86)', locale: 'zh-CN', flag: require('../image/flags/cn.svg') }
];

const DEFAULT_AREA_CODE = FLAG_SELECTOR_OPTION_LIST[0].id;

const find = (arr, obj) => {
    const res = [];
    arr.filter(o => {
        Object.keys(obj).map(i => {
            if (obj[i] === o[i]) {
                return res.push(o);
            }
            return null;
        });
       return null
    });
    return res;
};

class FlagsInputCode extends Component {
    constructor(props) {
        super(props);
        this.state = { areaCode: DEFAULT_AREA_CODE, phone: '', hasPhoneError: true, validate: false };
    }

    render() {
        const { value, onSubmit, onInputChange } = this.props;
        const { areaCode, phone, validate } = this.state;
        const currentItem = find(FLAG_SELECTOR_OPTION_LIST, { id: areaCode })[0];
        return (
            <Fragment>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '15px', top: '10px', zIndex: '1' }}>
                        <ReactCustomFlagSelect
                            tabIndex={'1'}
                            id={'areaCode'}
                            name={'areaCode'}
                            value={currentItem.id}
                            disabled={false}
                            optionList={FLAG_SELECTOR_OPTION_LIST}
                            classNameWrapper={''}
                            classNameContainer={''}
                            classNameOptionListItem={''}
                            classNameOptionListContainer={''}
                            classNameDropdownIconOptionListItem={''}
                            customStyleWrapper={{}}
                            customStyleContainer={{ border: 'none', fontSize: '12px' }}
                            customStyleSelect={{ width: '60px' }}
                            customStyleOptionListItem={{}}
                            customStyleOptionListContainer={{ maxHeight: '100px', overflow: 'auto', width: '120px', marginTop: '22%', left: '46px' }}
                            customStyleDropdownIcon={{}}
                        />
                    </div>
                    <Textbox
                        tabIndex="1"
                        id="phone"
                        customStyleWrapper={{ height: '100%' }}
                        customStyleContainer={{ height: '100%' }}
                        customStyleInput={{
                            paddingTop: '0',
                            paddingBottom: '0',
                            height: '45px',
                            paddingLeft: '90px',
                            paddingRight: '20px'
                        }}
                        value={phone}
                        validate={validate}
                        validationCallback={res =>
                            this.setState({
                                hasPhoneError: res,
                                validate: false
                            })
                        }
                        type="text"
                        placeholder="Please enter a mobile number"
                        onChange={res => {
                            onInputChange(res);
                        }}
                        onBlur={() => { }}
                        validationOption={{
                            check: true,
                            required: true,
                            customFunc: phone => {
                                if (validator.isMobilePhone(areaCode + phone, currentItem.locale)) {
                                    this.setState({
                                        phone: phone
                                    })
                                    return true;
                                } else {
                                    return 'Invalid phone format for ' + currentItem.locale;
                                }
                            }
                        }}
                    />
                </div>
                <div style={{ height: '20px' }} />
                {value ?
                    <article>Satsus Code: {value}</article>
                    :
                    <article></article>
                }
                <button onClick={() => { onSubmit(phone)}}>Add mobile number</button>
            </Fragment>
        )
    }
}

export default FlagsInputCode;