import styles from "../../styles/Home.module.css";

const quoteContainer = 'flex flex-col items-center sm:pt-8 gradient-background';

const Quote = () => {
    return (
        <div className={styles.container}>
            <div className={quoteContainer}>
                <iframe
                    src="https://amedex.web.app/widget?config=GBzUWqXQgdZnGuZNFGqwlcghiNj1&isMobile=true"
                    className='max-w-full rounded-2xl'
                    frameBorder="0"
                    width="428"
                    height="900"></iframe>
            </div>
        </div>
    );
}

export default Quote;
