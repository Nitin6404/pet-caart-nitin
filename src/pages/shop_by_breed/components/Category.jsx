const Category = () => {
    const categoryImages = [
        "/bone-about.png",
        "/bone-diet.png",
        "/bone-grooming.png",
        "/bone-training.png",
    ]
    return (
        <div className="w-full min-h-40 overflow-hidden bg-gradient-to-b from-[#004E6A66] to-[#FBF4F000]">
            <div className="flex justify-center space-x-4">
                {categoryImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Category ${index + 1}`}
                    className="w-48 h-24 object-cover"
                />
            ))}
            </div>
        </div>
    )
}

export default Category;