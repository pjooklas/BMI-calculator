class IsValid {

    static weight(input) {
        const allowed = '0123456789';

        if (typeof input !== 'string') {
            return [true, 'Wrong type input'];
        }

        for (const symbol of input) {
            if (!allowed.includes(symbol)) {
                return [true, 'Weight must be only numbers'];
            }
        }

        if (~~input < 1) {
            return [true, 'Weight is too small, must be more than 1kg'];
        }

        if (~~input > 200) {
            return [true, 'Weight is too large, must be less than 200kg'];
        }

        return [false, 'Weight is valid', ~~input]
    }

    static height(input) {
        const allowed = '0123456789';

        if (typeof input !== 'string') {
            return [true, 'Wrong type input'];
        }

        for (const symbol of input) {
            if (!allowed.includes(symbol)) {
                return [true, 'Height must be only numbers'];
            }
        }

        if (~~input < 50) {
            return [true, 'Height is too small, must be more than 50cm'];
        }

        if (~~input > 250) {
            return [true, 'Height is too large, must be less than 250cm'];
        }

        return [false, 'Height is valid', ~~input]
    }
}

export { IsValid }