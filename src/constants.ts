
export interface Products{
    title:string,
    image:string,
    description:string
}

export const products = [
    {

        title: "Buying your first home with Better",
        image: "/first-home.webp",
        description: "",
    },
    {
      
        title: "One Day Mortgage",
        image: "/one-day.webp",
        description:
            "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
    },
    {
       
        title: "Better HELOC",
        image: "/better-heloc.webp",
        description:
            "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit.",
    },
    {
        
        title: "Insurance",
        image: "/insurance.webp",
        description: "",
    },
];
export const calculators = [
    {
        title: "Mortage calculator",
        image: "/calc-1.webp",
        description: "",
    },
    {
        title: "Affordability calculator",
        image: "/calc-2.webp",
        description:
            "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
    },
    {
        title: "HELOC calculator",
        image: "/calc-3.webp",
        description:
            "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit.",
    },
    {
        title: "Fixed-rate loan comparison calculator",
        image: "/calc-4.webp",
        description: "",
    },
];
export const guides = [
    {
        title: "What is a good debt-to-incomme ratio for a home loan?",
        image: "/gide-1.webp",
        description: "",
    },
    {
        title: "Buying a house without realtor",
        image: "/guide-2.webp",
        description:
            "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
    },
    {
        title: "Timeline for home buying process",
        image: "/guide-3.webp",
        description:
            "Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit.",
    },
    {
        title: "Conventional loan requirements",
        image: "/guide-4.webp",
        description: "",
    },
];


export const navLeft = ['Buy', 'Refinance', 'HELOC', 'Rates', 'Better']

export const navLinks:Record<string,string[]>={
    Buy:['Apply Now','Purchase Rates','VA loans','Learning center'],
    Refinance:['Apply Now', 'Refinance rates','Learning Center'],
    HELOC:['Apply Now','Calculate your cash','Learning center'],
    Rates:['Purchase mortage rates','Refinance rates','HELOC rates'],
    Better:['Get Insurance','Title and Closing','Learning Center','Better Duo']
}