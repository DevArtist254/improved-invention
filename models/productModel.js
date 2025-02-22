const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'A product must have a name'],
            unique: true,
            trim: true,
            maxlength: [30, 'A product name must have less or equal than 40 characters'],
            minlength: [5, 'A product name have more or equal than 5 characters']
        },
        vehicle_brand: {
            type: String,
            enum: [
                "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Hyundai",
                "Kia", "Tesla", "Subaru", "Mazda", "Volvo", "Land Rover", "Jaguar", "Porsche", "Ferrari", "Lamborghini",
                "Bugatti", "Rolls-Royce", "Bentley", "Aston Martin", "McLaren",
                "Harley-Davidson", "Yamaha", "Kawasaki", "Suzuki", "Ducati",
                "KTM", "Triumph", "Royal Enfield", "Aprilia", "BMW Motorrad",
                "Volvo Trucks", "Scania", "MAN", "Freightliner", "Kenworth",
                "Peterbilt", "Mack Trucks", "Isuzu", "Iveco", "Hino",
                "Rivian", "Lucid Motors", "Polestar", "BYD", "VinFast"
            ],
            default: "Motors"
        },

        color: {
            type: String,
            enum: [
                "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
                "Gray", "Cyan", "Magenta", "Turquoise", "Teal", "Lime", "Olive", "Maroon", "Navy", "Beige",
                "Coral", "Gold", "Silver", "Bronze", "Ivory", "Lavender", "Violet", "Indigo", "Crimson", "Scarlet",
                "Ruby", "Sapphire", "Emerald", "Aquamarine", "Peach", "Mustard", "Periwinkle", "Lilac", "Amber", "Mauve",
                "Tan", "Charcoal", "Mint", "Plum", "Burgundy", "Rose", "Sky Blue", "Chocolate", "Copper", "Sand",
                "Khaki", "Azure", "Baby Blue", "Blush", "Cherry", "Cinnamon", "Cloud", "Cobalt", "Denim", "Ebony",
                "Fawn", "Flamingo", "Fuchsia", "Glacier", "Grape", "Honey", "Ivory Cream", "Jade", "Jasmine", "Juniper",
                "Lemon", "Licorice", "Mahogany", "Mango", "Maple", "Mocha", "Mulberry", "Ocean", "Onyx", "Opal",
                "Papaya", "Pastel Green", "Pastel Pink", "Peacock", "Pewter", "Pine", "Raspberry", "Rust", "Saffron", "Sage",
                "Sapphire Blue", "Seashell", "Sepia", "Slate", "Smoke", "Snow", "Steel Blue", "Sunset", "Tangerine", "Vanilla",
                "Velvet", "Vermilion", "Walnut", "Wine", "Zinc", "Zaffre"
            ],
            default: "White"
        },
        vehicle_model: {
            type: String,
            enum: [
                "Toyota Corolla", "Toyota Camry", "Toyota RAV4", "Toyota Tacoma", "Toyota Prius",
                "Honda Civic", "Honda Accord", "Honda CR-V", "Honda Pilot", "Honda Fit",
                "Ford F-150", "Ford Mustang", "Ford Explorer", "Ford Bronco", "Ford Focus",
                "Chevrolet Silverado", "Chevrolet Malibu", "Chevrolet Tahoe", "Chevrolet Camaro", "Chevrolet Corvette",
                "Nissan Altima", "Nissan Rogue", "Nissan Sentra", "Nissan Pathfinder", "Nissan Titan",
                "BMW 3 Series", "BMW 5 Series", "BMW X5", "BMW X3", "BMW M4",
                "Mercedes-Benz C-Class", "Mercedes-Benz E-Class", "Mercedes-Benz GLE", "Mercedes-Benz G-Class", "Mercedes-Benz S-Class",
                "Audi A4", "Audi A6", "Audi Q5", "Audi Q7", "Audi R8",
                "Volkswagen Jetta", "Volkswagen Passat", "Volkswagen Tiguan", "Volkswagen Golf", "Volkswagen Atlas",
                "Hyundai Elantra", "Hyundai Sonata", "Hyundai Tucson", "Hyundai Santa Fe", "Hyundai Ioniq 5",
                "Kia Forte", "Kia Sorento", "Kia Telluride", "Kia Sportage", "Kia EV6",
                "Tesla Model S", "Tesla Model 3", "Tesla Model X", "Tesla Model Y", "Tesla Cybertruck",
                "Subaru Outback", "Subaru Forester", "Subaru WRX", "Subaru Crosstrek", "Subaru Legacy",
                "Mazda CX-5", "Mazda CX-30", "Mazda 3", "Mazda 6", "Mazda MX-5 Miata",
                "Volvo XC90", "Volvo XC60", "Volvo S60", "Volvo V60", "Volvo C40 Recharge",
                "Jeep Wrangler", "Jeep Grand Cherokee", "Jeep Compass", "Jeep Gladiator", "Jeep Renegade",
                "Lexus RX", "Lexus NX", "Lexus ES", "Lexus IS", "Lexus GX",
                "Porsche 911", "Porsche Macan", "Porsche Cayenne", "Porsche Taycan", "Porsche Panamera",
                "Ferrari 488", "Ferrari Roma", "Ferrari SF90", "Ferrari F8 Tributo", "Ferrari Purosangue",
                "Lamborghini Huracan", "Lamborghini Urus", "Lamborghini Aventador", "Lamborghini Revuelto", "Lamborghini Gallardo"
            ],
            default: "Toyota"
        },
        price: {
            type: Number,
            required: [true, "A vehicle must have a price"],
            min: [0, 'Price cannot be negative']
        },
        negotiable: Boolean,
        bookmarks: {
            type: Number,
            default: 1,
        },
        views: {
            type: Number,
            default: 1,
        },
        primarySpecifications: [
            {
                specType: {
                    type: String,
                    enum: ["transmission", "fuel_type", "usage", "trimming", "sound system", "seat_material", "air_conditioning", "steering_controls", "phone_connectivity", "auto_start_and_stop", "infotainment_system", "isofix_child_seat_anchors", "fm_radio_with_bluetooth_aux_and_usb", "keyless_entry_and_push_button_start"],
                    default: "usage"
                },
                value: {
                    type: String,
                    required: true,
                    maxlength: [20, 'A product name must have less or equal than 20 characters'],
                    minlength: [3, 'A product name have more or equal than 3 characters'],
                    trim: true
                }
            }
        ],
        specifications: [
            {
                specType: {
                    type: String,
                    enum: ["make", "model", "usage", "drivetrain", "engine_size", "trim"],
                    default: "usage"
                },
                value: {
                    type: String,
                    required: true,
                    maxlength: [20, 'A vehicle specifications must have less or equal than 20 characters'],
                    minlength: [3, 'A vehicle specifications have more or equal than 3 characters'],
                    trim: true
                }
            }
        ],
        description: {
            type: String,
            trim: true
        },
        markUnavailable: Boolean,
        report_abuse: Boolean,
        bodyType: {
            type: String,
            enum: ["SUVs", "Saloons", "Hatchbacks", "Pickup", "Cabriolet/convertibles", "Van"]
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true}
    }
)
