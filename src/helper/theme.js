const theme = {
    sizes: {
        select: {
            padding: 15,
            border: 1,
            getConstantWidth() {
            return (this.padding + this.border) * 2 ;
            }
        },
        selectedOption: {
            margin: 5
        }
    },
    activeLink: {
        textDecoration: "underline",
        color: 'violet',
        fontWeight: 700

    }
}

export default theme;

