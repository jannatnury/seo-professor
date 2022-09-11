import React from 'react';

const CountDown = () => {
    return (
        <div>

            <h1 className='text-4xl text-center mb-4 font-semibold'>Offers Remaing </h1>

            <div className='flex mx-auto mb-7'>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 32 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;