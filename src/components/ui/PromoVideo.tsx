import promoVideo from "@/assets/video/promo-video.mp4"
const PromoVideo = () => {
    return (
        <div className="relative w-full flex justify-center">
            
            
            
            <video
            src={promoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl "
            />
            
            
            
        </div>
    );
};
export default PromoVideo;