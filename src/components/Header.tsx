import * as React from 'react';
import cls from './header.scss';
import Jscomponent from './jsComponent/Jscomponent';

export default class Header extends React.Component {

    render() {
        return(
            <section className={cls.header}>
                <div>header sections</div>
                <Jscomponent userName={'MAX- the lion'}/>
            </section>
        );
    }
}