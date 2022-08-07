import styles from "../../styles/Home.module.css";

const quoteContainer = 'flex flex-col items-center py-6 sm:py-8 px-4 gradient-background';
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
                    height="831"></iframe>

                <iframe
                    src='https://amedex.web.app/widget?config=GBzUWqXQgdZnGuZNFGqwlcghiNj1&isMobile=true'
                    className='max-w-full rounded-2xl block md:hidden'
                    frameBorder="0"
                    width="428"
                    height="831"></iframe>
            </div>
        </div>
    );
}

export default Quote;
