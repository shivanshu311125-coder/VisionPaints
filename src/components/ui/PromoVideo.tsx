import promoVideo from "@/assets/video/promo-video.mp4"
const PromoVideo = () => {
    return (
        <div className="relative w-full flex justify-center">
            
                <div className=" relative rounded-2xl p-[4px]  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse shadow-[0_0_40px_10px_rgba(236,72,153,0.5)]"></div>
            
            <video
            src={promoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[450px] object-cover rounded-2xl "
            />
            
            <div className="absolute insert-0 rounded-2xl bg-black/30"></div>
            
        </div>
    );
};
export default PromoVideo;