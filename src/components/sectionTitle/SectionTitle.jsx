

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md: w-4/12 text-center mx-auto my-4">
            <p className="text-yellow-600 mb-2">------{subHeading}------</p>
            <div className="divider"></div>
            <h3 className="text-3xl font-semibold uppercase py-2">{heading}</h3>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;