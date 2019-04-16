import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Components/Search/Search';

const Index = () => {
    return <div>
        <h1>Accessibility Check</h1>
        <p>Identify and fix common problems that affect your site's performance, accessibility, and user experience.</p>

        <Search />

    </div>;
}

ReactDOM.render(<Index />, document.getElementById('root'));