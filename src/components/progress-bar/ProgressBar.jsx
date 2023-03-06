import './progressBar.css'
import {useEffect,  useRef, useState} from "react";

const status = {
    0: {
        text: "Very Poor",
        color: "#FB6061"
    },
    50:{
        text: "Poor",
        color: "#FC8441"
    },
    60:{
        text: "Unsatisfactory",
        color: "#FFD140"
    },
    70:{
        text: "Needs Improvement",
        color: "#0095FC"
    },
    80:{
        text: "Excellent",
        color: "#3ADA98"
    },
}

const ProgressBar = ({value = 0}) => {
    const refCircleContainer = useRef()
    const [data, setData] = useState(status['0'])
    useEffect(() => {
        if(value !== 100) {
            if (value >= 0 && value <= 49) setData(status['0'])
            if (value >= 50 && value <= 59) setData(status['50'])
            if (value >= 60 && value <= 69) setData(status['60'])
            if (value >= 70 && value <= 79) setData(status['70'])
            if (value >= 80 && value <= 100) setData(status['80'])

            if(value <= 2) refCircleContainer.current.style.transform = `rotate(${4}deg)`
            if(value > 2 && value <=50) refCircleContainer.current.style.transform = `rotate(${1.65 * value}deg)`
            if(value > 50 && value <= 60) refCircleContainer.current.style.transform = `rotate(${1.75 * value}deg)`
            if(value > 60 && value <= 70) refCircleContainer.current.style.transform = `rotate(${1.83 * value}deg)`
            if(value > 70 && value <= 80) refCircleContainer.current.style.transform = `rotate(${1.85 * value}deg)`
            if(value > 80 && value <= 90) refCircleContainer.current.style.transform = `rotate(${1.85 * value}deg)`
            if(value > 90 && value <= 100) refCircleContainer.current.style.transform = `rotate(${1.79 * value}deg)`
        }
    },[value])

    return <>
        <div className="container">
            <div ref={refCircleContainer} className="circleContainer">
                <svg className="circle" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="6.5" fill="white" stroke={data.color} strokeWidth="6"/>
                </svg>

            </div>

            <div className="svgContainer">
                <svg width="263" height="158" viewBox="0 0 263 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M244.499 150.32V149.324H246.755V158H245.651V150.32H244.499ZM248.631 153.572C248.631 152.196 248.855 151.124 249.303 150.356C249.751 149.58 250.535 149.192 251.655 149.192C252.767 149.192 253.547 149.58 253.995 150.356C254.443 151.124 254.667 152.196 254.667 153.572C254.667 154.972 254.443 156.06 253.995 156.836C253.547 157.612 252.767 158 251.655 158C250.535 158 249.751 157.612 249.303 156.836C248.855 156.06 248.631 154.972 248.631 153.572ZM253.587 153.572C253.587 152.876 253.539 152.288 253.443 151.808C253.355 151.32 253.167 150.928 252.879 150.632C252.599 150.336 252.191 150.188 251.655 150.188C251.111 150.188 250.695 150.336 250.407 150.632C250.127 150.928 249.939 151.32 249.843 151.808C249.755 152.288 249.711 152.876 249.711 153.572C249.711 154.292 249.755 154.896 249.843 155.384C249.939 155.872 250.127 156.264 250.407 156.56C250.695 156.856 251.111 157.004 251.655 157.004C252.191 157.004 252.599 156.856 252.879 156.56C253.167 156.264 253.355 155.872 253.443 155.384C253.539 154.896 253.587 154.292 253.587 153.572ZM256.166 153.572C256.166 152.196 256.39 151.124 256.838 150.356C257.286 149.58 258.07 149.192 259.19 149.192C260.302 149.192 261.082 149.58 261.53 150.356C261.978 151.124 262.202 152.196 262.202 153.572C262.202 154.972 261.978 156.06 261.53 156.836C261.082 157.612 260.302 158 259.19 158C258.07 158 257.286 157.612 256.838 156.836C256.39 156.06 256.166 154.972 256.166 153.572ZM261.122 153.572C261.122 152.876 261.074 152.288 260.978 151.808C260.89 151.32 260.702 150.928 260.414 150.632C260.134 150.336 259.726 150.188 259.19 150.188C258.646 150.188 258.23 150.336 257.942 150.632C257.662 150.928 257.474 151.32 257.378 151.808C257.29 152.288 257.246 152.876 257.246 153.572C257.246 154.292 257.29 154.896 257.378 155.384C257.474 155.872 257.662 156.264 257.942 156.56C258.23 156.856 258.646 157.004 259.19 157.004C259.726 157.004 260.134 156.856 260.414 156.56C260.702 156.264 260.89 155.872 260.978 155.384C261.074 154.896 261.122 154.292 261.122 153.572Z" fill="black"/>
                    <path d="M104.234 20.5862C103.785 18.3635 101.616 16.9197 99.4085 17.4398C72.0269 23.8925 47.4633 39.1329 29.5088 60.8872C11.5544 82.6416 1.24914 109.65 0.106502 137.758C0.0143907 140.024 1.84333 141.88 4.11101 141.9V141.9C6.3787 141.92 8.22594 140.096 8.32295 137.831C9.44587 111.606 19.0867 86.4167 35.8426 66.1147C52.5984 45.8126 75.5018 31.5696 101.038 25.4934C103.244 24.9685 104.684 22.809 104.234 20.5862V20.5862Z" fill="#FB6061"/>
                    <path d="M153.477 20.5282C153.922 18.3045 152.48 16.1346 150.243 15.7612C138.902 13.8677 127.359 13.499 115.92 14.6648C113.664 14.8948 112.087 16.9682 112.389 19.2158V19.2158C112.69 21.4634 114.756 23.0337 117.013 22.8086C127.552 21.7575 138.183 22.0971 148.633 23.8186C150.871 24.1872 153.033 22.752 153.477 20.5282V20.5282Z" fill="#FC8441"/>
                    <path d="M199.631 39.9963C200.913 38.126 200.44 35.5642 198.53 34.3419C188.668 28.0315 177.993 23.0928 166.799 19.6622C164.631 18.9977 162.372 20.2957 161.777 22.484V22.484C161.182 24.6722 162.476 26.9218 164.643 27.591C174.95 30.7742 184.784 35.3239 193.883 41.1186C195.796 42.3368 198.348 41.8666 199.631 39.9963V39.9963Z" fill="#FFD140"/>
                    <path d="M231.218 71.2365C233.074 69.9334 233.527 67.3682 232.166 65.5545C226.191 57.5959 219.316 50.3553 211.677 43.9773C209.936 42.5238 207.351 42.8441 205.954 44.6303V44.6303C204.556 46.4165 204.877 48.9918 206.614 50.449C213.62 56.3241 219.936 62.9757 225.441 70.276C226.806 72.0866 229.362 72.5396 231.218 71.2365V71.2365Z" fill="#0095FC"/>
                    <path d="M253.894 143C256.162 143 258.007 141.161 257.935 138.894C257.264 117.835 251.445 97.2583 240.986 78.9673C239.86 76.9986 237.325 76.3984 235.393 77.5862V77.5862C233.461 78.7739 232.865 81.2996 233.986 83.2707C243.655 100.265 249.053 119.354 249.718 138.895C249.795 141.161 251.626 143 253.894 143V143Z" fill="#3ADA98"/>
                    <path d="M0.744 152.572C0.744 151.196 0.968 150.124 1.416 149.356C1.864 148.58 2.648 148.192 3.768 148.192C4.88 148.192 5.66 148.58 6.108 149.356C6.556 150.124 6.78 151.196 6.78 152.572C6.78 153.972 6.556 155.06 6.108 155.836C5.66 156.612 4.88 157 3.768 157C2.648 157 1.864 156.612 1.416 155.836C0.968 155.06 0.744 153.972 0.744 152.572ZM5.7 152.572C5.7 151.876 5.652 151.288 5.556 150.808C5.468 150.32 5.28 149.928 4.992 149.632C4.712 149.336 4.304 149.188 3.768 149.188C3.224 149.188 2.808 149.336 2.52 149.632C2.24 149.928 2.052 150.32 1.956 150.808C1.868 151.288 1.824 151.876 1.824 152.572C1.824 153.292 1.868 153.896 1.956 154.384C2.052 154.872 2.24 155.264 2.52 155.56C2.808 155.856 3.224 156.004 3.768 156.004C4.304 156.004 4.712 155.856 4.992 155.56C5.28 155.264 5.468 154.872 5.556 154.384C5.652 153.896 5.7 153.292 5.7 152.572Z" fill="black"/>
                    <path d="M134.816 1.48636L130.61 1.26348L130.465 3.99565C130.663 3.74974 130.945 3.55643 131.313 3.4157C131.682 3.26698 132.074 3.20363 132.489 3.22565C133.152 3.26078 133.684 3.42916 134.085 3.73078C134.486 4.02441 134.762 4.39558 134.915 4.84427C135.076 5.2854 135.143 5.74963 135.117 6.23694C135.087 6.81214 134.952 7.3217 134.712 7.76563C134.472 8.20956 134.122 8.55149 133.66 8.79141C133.207 9.03176 132.653 9.13458 131.998 9.09987C131.159 9.05542 130.491 8.80374 129.995 8.34483C129.498 7.88592 129.213 7.294 129.139 6.56908L130.206 6.6256C130.286 7.08646 130.487 7.4536 130.809 7.72703C131.131 8.00045 131.547 8.1507 132.058 8.1778C132.69 8.21124 133.175 8.04869 133.514 7.69015C133.854 7.32362 134.041 6.82879 134.074 6.20567C134.107 5.58254 133.972 5.09475 133.67 4.74229C133.369 4.38183 132.907 4.1851 132.284 4.15208C131.86 4.12964 131.483 4.21381 131.153 4.40459C130.831 4.5878 130.588 4.85135 130.426 5.19524L129.395 5.14063L129.654 0.251486L134.867 0.527704L134.816 1.48636ZM136.642 4.88773C136.715 3.51366 136.995 2.45502 137.483 1.7118C137.972 0.960592 138.775 0.614621 139.894 0.673886C141.004 0.732728 141.762 1.16146 142.169 1.96008C142.575 2.75071 142.742 3.83306 142.67 5.20713C142.596 6.60517 142.314 7.67979 141.826 8.431C141.337 9.18221 140.538 9.52839 139.428 9.46955C138.309 9.41028 137.547 8.98134 137.14 8.18272C136.734 7.3841 136.568 6.28577 136.642 4.88773ZM141.591 5.14998C141.628 4.45496 141.611 3.86524 141.541 3.38083C141.479 2.88886 141.312 2.48746 141.04 2.17664C140.776 1.86624 140.376 1.69685 139.841 1.66849C139.298 1.6397 138.874 1.76548 138.571 2.04583C138.276 2.3266 138.067 2.7081 137.946 3.19034C137.832 3.66501 137.757 4.24986 137.721 4.94488C137.682 5.66387 137.694 6.26936 137.757 6.76133C137.827 7.25372 137.994 7.65512 138.257 7.96553C138.529 8.27635 138.937 8.44616 139.48 8.47494C140.015 8.5033 140.431 8.3771 140.726 8.09633C141.029 7.81599 141.238 7.43448 141.351 6.95182C141.473 6.46959 141.553 5.86897 141.591 5.14998Z" fill="black"/>
                    <path d="M186.805 14.1008C187.004 13.2177 186.683 12.5897 185.841 12.217C185.19 11.9286 184.592 11.9654 184.047 12.3275C183.505 12.6823 182.983 13.4354 182.481 14.587C182.818 14.2812 183.227 14.1081 183.709 14.0678C184.201 14.0234 184.688 14.1081 185.171 14.322C185.925 14.6558 186.421 15.1556 186.659 15.8214C186.905 16.4904 186.845 17.2382 186.479 18.0647C186.259 18.5621 185.962 18.9645 185.59 19.272C185.225 19.5827 184.793 19.7675 184.294 19.8266C183.803 19.8889 183.279 19.7969 182.723 19.5506C181.97 19.2168 181.456 18.7877 181.181 18.2632C180.905 17.7388 180.815 17.1431 180.909 16.4761C181.003 15.8091 181.243 15.0405 181.629 14.1701C182.818 11.4858 184.349 10.5584 186.222 11.3881C186.939 11.7057 187.416 12.149 187.654 12.7182C187.892 13.2873 187.916 13.8843 187.726 14.5092L186.805 14.1008ZM184.588 15.0744C184.274 14.9351 183.949 14.8696 183.612 14.8782C183.279 14.8793 182.967 14.9727 182.674 15.1582C182.393 15.3397 182.169 15.6169 182.004 15.99C181.758 16.5458 181.718 17.0706 181.884 17.5643C182.053 18.0506 182.438 18.4267 183.038 18.6924C183.55 18.9193 184.025 18.9419 184.465 18.7603C184.914 18.5746 185.259 18.2111 185.499 17.6698C185.752 17.0993 185.803 16.5884 185.653 16.1369C185.507 15.6781 185.152 15.324 184.588 15.0744ZM188.463 17.2243C189.02 15.9662 189.659 15.0769 190.38 14.5562C191.104 14.0282 191.978 13.9911 193.002 14.4448C194.019 14.8953 194.575 15.566 194.67 16.4569C194.768 17.3406 194.539 18.4114 193.981 19.6695C193.414 20.9494 192.769 21.8534 192.045 22.3814C191.321 22.9094 190.451 22.9482 189.434 22.4977C188.41 22.044 187.85 21.3716 187.755 20.4807C187.66 19.5897 187.896 18.5042 188.463 17.2243ZM192.994 19.2319C193.276 18.5956 193.47 18.0386 193.577 17.5608C193.694 17.079 193.681 16.6445 193.538 16.2572C193.402 15.8731 193.089 15.5725 192.599 15.3554C192.101 15.135 191.661 15.1018 191.278 15.2558C190.902 15.413 190.571 15.6952 190.286 16.1025C190.011 16.5057 189.732 17.0254 189.45 17.6618C189.159 18.3201 188.954 18.8901 188.837 19.3719C188.727 19.857 188.74 20.2915 188.876 20.6756C189.02 21.0629 189.34 21.3667 189.837 21.5871C190.327 21.8042 190.76 21.8342 191.136 21.677C191.519 21.523 191.85 21.2408 192.128 20.8303C192.414 20.423 192.702 19.8902 192.994 19.2319Z" fill="black"/>
                    <path d="M231.531 44.0348L223.51 46.865L222.763 46.0514L230.737 43.3296L227.606 39.9161L228.296 39.2834L232.141 43.4751L231.531 44.0348ZM229.846 47.2226C230.86 46.2925 231.802 45.733 232.671 45.544C233.545 45.3496 234.361 45.6651 235.118 46.4904C235.87 47.3099 236.111 48.147 235.842 49.0017C235.579 49.851 234.94 50.7407 233.926 51.6708C232.895 52.6171 231.941 53.1875 231.067 53.3819C230.192 53.5763 229.379 53.2637 228.627 52.4443C227.87 51.6189 227.626 50.7789 227.895 49.9242C228.164 49.0695 228.815 48.169 229.846 47.2226ZM233.196 50.8749C233.709 50.4044 234.11 49.9716 234.399 49.5764C234.699 49.1817 234.861 48.7782 234.884 48.3658C234.913 47.9594 234.747 47.5587 234.384 47.1637C234.016 46.7628 233.626 46.5563 233.213 46.5441C232.806 46.5379 232.39 46.6643 231.966 46.9234C231.552 47.183 231.089 47.548 230.576 48.0185C230.046 48.5052 229.63 48.9459 229.33 49.3406C229.035 49.7412 228.874 50.1448 228.845 50.5512C228.821 50.9635 228.993 51.3701 229.361 51.771C229.724 52.166 230.108 52.3666 230.516 52.3729C230.929 52.3851 231.345 52.2586 231.764 51.9936C232.188 51.7345 232.666 51.3616 233.196 50.8749Z" fill="black"/>
                    <path d="M253.702 84.2875C253.701 83.8062 253.812 83.3922 254.037 83.0454C254.261 82.6986 254.596 82.4369 255.042 82.2603C255.444 82.1014 255.844 82.059 256.244 82.1333C256.651 82.2047 257.025 82.4007 257.367 82.7214C257.719 83.0465 258.007 83.4918 258.231 84.0572C258.455 84.6225 258.548 85.1406 258.51 85.6114C258.483 86.0867 258.346 86.4895 258.098 86.8198C257.861 87.1547 257.541 87.4016 257.139 87.5605C256.708 87.7312 256.283 87.766 255.864 87.6649C255.453 87.5609 255.09 87.3389 254.775 86.999C254.816 87.5162 254.711 87.9793 254.46 88.3883C254.219 88.8019 253.85 89.1073 253.351 89.3045C252.868 89.4958 252.397 89.5446 251.938 89.4507C251.487 89.354 251.074 89.1259 250.699 88.7664C250.335 88.4115 250.041 87.9514 249.818 87.386C249.594 86.8207 249.493 86.284 249.516 85.776C249.549 85.2725 249.697 84.8311 249.96 84.4518C250.23 84.0695 250.607 83.7827 251.091 83.5914C251.589 83.3942 252.07 83.3589 252.533 83.4854C252.996 83.6119 253.386 83.8793 253.702 84.2875ZM256.628 86.6271C257.082 86.4476 257.373 86.1605 257.5 85.7658C257.628 85.3711 257.589 84.9134 257.383 84.3927C257.18 83.8794 256.897 83.5226 256.534 83.3221C256.17 83.1217 255.758 83.1127 255.297 83.2952C254.88 83.46 254.606 83.745 254.474 84.15C254.344 84.5626 254.377 85.0143 254.571 85.5053C254.768 86.0037 255.054 86.3553 255.427 86.5602C255.811 86.7697 256.212 86.792 256.628 86.6271ZM253.79 85.8143C253.572 85.2638 253.264 84.8653 252.865 84.6187C252.474 84.3691 252.022 84.3459 251.508 84.549C251.032 84.7373 250.715 85.0563 250.558 85.5058C250.403 85.9628 250.439 86.4777 250.666 87.0505C250.892 87.6233 251.217 88.0197 251.639 88.2396C252.062 88.4596 252.511 88.4754 252.987 88.287C253.486 88.0898 253.798 87.7686 253.922 87.3234C254.055 86.8752 254.011 86.3722 253.79 85.8143ZM255.826 89.8849C257.106 89.3786 258.185 89.1925 259.064 89.3266C259.951 89.4576 260.6 90.0439 261.012 91.0853C261.421 92.1193 261.347 92.9874 260.79 93.6895C260.241 94.3886 259.327 94.9913 258.047 95.4975C256.745 96.0126 255.651 96.2046 254.765 96.0735C253.878 95.9424 253.231 95.3599 252.822 94.3259C252.41 93.2845 252.482 92.4127 253.039 91.7106C253.595 91.0085 254.525 90.4 255.826 89.8849ZM257.65 94.4933C258.297 94.2372 258.826 93.9762 259.237 93.7104C259.658 93.449 259.954 93.13 260.123 92.7533C260.295 92.384 260.283 91.9502 260.086 91.4518C259.886 90.9459 259.595 90.6136 259.214 90.4547C258.835 90.3032 258.402 90.2726 257.913 90.3629C257.434 90.4577 256.871 90.6331 256.224 90.8891C255.554 91.154 255.009 91.4172 254.587 91.6785C254.169 91.9473 253.874 92.2664 253.701 92.6356C253.532 93.0123 253.548 93.4536 253.748 93.9595C253.945 94.4579 254.233 94.7828 254.611 94.9343C254.992 95.0932 255.426 95.1237 255.912 95.026C256.401 94.9358 256.98 94.7582 257.65 94.4933Z" fill="black"/>
                </svg>
            </div>
        </div>
            <div>{value}</div>
            <div>{data.text}</div>
        </>
}

ProgressBar.displayName = 'ProgressBar'
export default ProgressBar