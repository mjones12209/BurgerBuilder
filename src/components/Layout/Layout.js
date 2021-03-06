import React,{Fragment} from 'react';
import styles from './Layout.module.css';

const Layout = props => {
    return (
      <Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={styles['Content']}>{
          props.children}
        </main>
      </Fragment>
    );
}

export default Layout;
