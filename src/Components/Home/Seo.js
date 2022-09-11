import React from 'react';

const seo = () => {
    return (
      <div>
        <h1 className='text-4xl mt-12 text-slate-600 text-center font-semibold'>Our SEO Services</h1>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-12 w-5/6 mt-7 mx-auto'>
            {/* card -01 */}
            <div className="card card-side bg-blue-300 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body bg-blue-300">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            {/* card -02 */}
            <div className="card card-side bg-blue-300 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body bg-blue-300">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            {/* card -03 */}
            <div className="card card-side bg-blue-300 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body bg-blue-300">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            {/* card-04 */}
            <div className="card card-side bg-blue-300 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body bg-blue-300">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    );
};

export default seo;