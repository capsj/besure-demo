import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";

const quoteContainer = 'flex flex-col items-center sm:pt-8 gradient-background';
const iframeSrc = 'https://amedex.web.app/widget?config=GBzUWqXQgdZnGuZNFGqwlcghiNj1';

const Quote = () => {
    return (
        <div className={styles.container}>
            <div className={quoteContainer}>
                <iframe
                    src={iframeSrc}
                    className='max-w-full rounded-2xl hidden md:block'
                    frameBorder="0"
                    width="428"
                    height="900"></iframe>

                <iframe
                    src={iframeSrc + '&isMobile=true'}
                    className='max-w-full rounded-2xl block md:hidden'
                    frameBorder="0"
                    width="428"
                    height="900"></iframe>
            </div>
        </div>
    );
}

export default Quote;
