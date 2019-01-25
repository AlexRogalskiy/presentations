import React from 'react';
import {Helmet} from 'react-helmet';
import slideControls from '../../../components/slide-controls/slide-controls';
import './index.scss';
import '../../../styles/main.scss';

const TITLE = 'MockMVC in Action!';

const MockMvcInAction = () => (
  <div className={'mock-mvc-in-action'}>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <div>
      <h1 className={'title'}>{TITLE}</h1>
      <h2 className={'subtitle'}>Marc Nuri</h2>
    </div>
  </div>
);

export default slideControls(MockMvcInAction, '/', '/');
