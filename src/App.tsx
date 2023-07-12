import React from 'react';
import {QueryForm} from "./components/QueryForm";
import {commonStyles} from "./styles/styles";

function App() {
    return (
        <div className="pt-5 pl-4 max-w-2xl">
            <div className="flex flex-row justify-start mb-7">
                <div className={`${commonStyles.headerTextPurple}`}>
                    FL
                </div>
                <div className={`${commonStyles.headerTextOrange} ml-2`}>
                    KB Hub
                </div>
            </div>
            <hr className="h-1 my-8 bg-gray-300" />
            <div className={`${commonStyles.headerTextSetback}`}>
                Ideas for you
            </div>
            <div className={`${commonStyles.textFocused} flex flex-col`}>
                <p className="py-2">What are the Focused Labs company values?</p>
                <p className="py-2">What services does Focused Labs provide?</p>
                <p className="py-2">Where is the Chicago office located?</p>
            </div>
            <hr className="h-1 my-8 bg-gray-300" />
            <QueryForm />
        </div>
    );
}

export default App;
