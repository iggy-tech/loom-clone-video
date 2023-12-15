'use client'

import { emojisplosions } from 'emojisplosion'

const FeedbackSection = () => {

    const handleEmojiClick = () => {
        const { cancel } = emojisplosions({
            emojis: ["👍"]
        })
        setTimeout(cancel, 500)
    }

    const handleEmojiClick2 = () => {
        const { cancel } = emojisplosions({
            emojis: ["😁"]
        })
        setTimeout(cancel, 500)
    }

    const handleEmojiClick3 = () => {
        const { cancel } = emojisplosions({
            emojis: ["😍"]
        })
        setTimeout(cancel, 500)
    }

    const handleEmojiClick4 = () => {
        const { cancel } = emojisplosions({
            emojis: ["🤩"]
        })
        setTimeout(cancel, 500)
    }
    const handleEmojiClick5 = () => {
        const { cancel } = emojisplosions({
            emojis: ["🚀"]
        })
        setTimeout(cancel, 500)
    }

    const handleEmojiClick6 = () => {
        const { cancel } = emojisplosions({
            emojis: ["😡"]
        })
        setTimeout(cancel, 500)
    }


    return ( 
    <div>
        <div className='md:w-5/6 md:mx-auto bg-[#ffedec] md:rounded-[80px] px-10 md:p-20 items-center justify-center py-10'>
            <div className='md:flex'>
                <div className='text-[#92312a] md:mx-auto md:text-center flex  md:justify-center items-center text-4xl md:text-6xl py-10 font-medium md:w-1/2'>
                        Provide Fun Feedback
                </div>
                <div className='text-xl md:text-3xl text-[#92312a] leading-relaxed font-light justify-start items-start flex md:w-2/5 mx-auto'>
                Offer feedback on a project using a quick video commentary or create a 
                one-on-one session for personal attention and encouragement from anywhere.
                </div>
            </div>

            <div className='my-10 border md:p-20 px-10 py-8 rounded-[80px] items-center justify-center flex bg-white space-x-6 md:space-x-10 shadow-xl'>
            <div onClick={handleEmojiClick}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                    👍 
                </div>
            </div>

            <div onClick={handleEmojiClick2}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                😁
                </div>
            </div>

            <div onClick={handleEmojiClick3}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                😍
                </div>
            </div>

            <div onClick={handleEmojiClick4}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                🤩
                </div>
            </div>

            <div onClick={handleEmojiClick5}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                🚀
                </div>
            </div>

            <div onClick={handleEmojiClick5}>
                <div className='cursor-pointer text-3xl md:text-6xl'>
                😡
                </div>
            </div>
            </div>
        </div>
    </div> );
}
 
export default FeedbackSection;