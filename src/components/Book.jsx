import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <Link to={`../book/${book.isbn13}`}>
            <div>
                {/* card is here */}
                <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                    <img src={book.image} alt="book cover" className=' object-cover lg:w-full h-56 md:h-64 xl:h-80' />
                    {/* hover effect card for every items */}
                    <div className='bg-black text-white  bg-opacity-75  opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-300 p-6 flex flex-col'>
                        <p>{book.title}</p>
                        <br />
                        <p>{book.subtitle.substring(0, 45)}...</p>

                        <br />
                        <p className='mt-auto'>{book.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;