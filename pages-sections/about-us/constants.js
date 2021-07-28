import FaceJCole from "../../assets/img/faces/jeff-cole.jpg";
import FaceJill from "../../assets/img/faces/jill-hodges.jpg";
import FaceJWebb from "../../assets/img/faces/jwebb.jpg";
import FaceKHaddix from "../../assets/img/faces/kayla_haddix.jpg";
import FaceTBergler from "../../assets/img/faces/Tod_Bergler.png";
import FaceJBourke from "../../assets/img/faces/julian.jpg";
import FaceCPratt from "../../assets/img/faces/chelsie.jpg";

const jeff_cole_bio = 'Jeffrey Cole is the owner and founder of US Hemp Brokerage LLC, which he established in order to become the leading professional brokerage firm in the domestic hemp markets. While Jeff formed the company in August of 2018, he has recently nurtured the firm to its official launch on November 1, 2019. He has 7 team members at US Hemp Brokerage and he is based in Boulder County, CO. Most recently (October 2018 – November 2019), Jeffrey held the position of Director of Program Development with Restorative Botanicals, a leading hemp firm, based in Boulder, CO. While at Restorative, where he accomplished many of his goals, he helped manage the Restorative Botanicals brand products, participated as a leader in the development of the Urban Alchemy brand extension, led the wholesale, broker and direct sales teams and was responsible for the event marketing efforts which include both Natural Product Expos, NOCO, MJ Biz, Southern Hemp Expo, CBD Expos and many others. Additionally, and of paramount priority, Mr. Cole was director of the Restorative Botanicals Private Label programs.Among several major initiatives, his team secured international acclaim for the Restorative Botanicals brand with an advertising campaign in Times Square on New Year’s Eve 2018. This advertising program was brought to Restorative Botanicals by leveraging Jeff’s longstanding relationships and experience in the New York media and advertising industries. Prior to joining Restorative Botanicals, he held an Executive Manager position at Ft. Lupton based PureHemp Technology LLC, where since 2016, he served as VP of Sales & Marketing for the parent company, Brand Director for Pure Kind Botanicals brand products, and he established the private label offerings for that firm. All-tolled, Jeffrey Cole has conceived of, managed and/or operated 63 hemp brands through his private label program management.  Mr. Cole’s expertise developing and marketing products in the hemp industry has resulted in dozens of hemp-based personal care, health & beauty and hemp food products reaching national markets and beyond. For over 20 years, Mr. Cole has focused on marketing and brand building in major media channels, sustainability and natural products, with a focus on natural consumers in the top 25 US markets. Jeffrey is a Colorado native who has worked in natural products in the Denver/Boulder area since 2013, where he served as Advertising Director and senior manager for Boulder Weekly, Best of Boulder and Boulderganic, the leading sustainability magazine serving the Boulder natural product community. His thought-leadership with the influential Cultural Creative and LOHAS (Lifestyles of Health and Sustainability) consumer groups consistently delivers successful products to the hemp marketplace. '
const jill_hodges_bio = 'Jill Hodges is our go-to girl when it comes to brand strategy, creative direction and graphic design. Jill’s design roots started in the “dot com” craze as a senior designer for a national magazine conglomerate. She quickly branched out and has been integrally involved in Pure Kind Botanicals, John Budd brand, Restorative Botanicals and Lucky\'s Market hemp brands. She also has led design efforts for Grandby Ranch, PeaceMaker Whiskey, Pura Vida Fitness and Spa, the Denver Broncos, Children’s Hospital Denver, About.com, and the Epic Hotel in Miami. Demonstrating her talent beyond print, Jill has also been a design assistant on several HGTV shows, including Designed to Sell, Curb Appeal The Block, and she also worked with the Rachel Ray SoHo studio space. '
const jeff_webb_bio = 'Jeff Webb is the Technology Director of US Hemp Brokerage. Jeff’s background is in Graphic Design and Web Development; Online sales channel buildouts and is expert with Full Stack Development and coding. Jeff Webb was raised as an “Army Brat” growing up and traveling around the world from North Carolina to Saudi Arabia. After his own stint in the Army, Jeff settled down in Tampa, Florida where he pursued an entrepreneurial career in Graphic Design and Real Estate redevelopment. After the great real estate market crash of 2008, Jeff ventured into the transportation field and ran his own private transportation company which offered personal drivers to many “A-list" sports, entertainment and high-networth leaders in the Tampa Bay area. Jeff started his career in Web Development at SiteZeus and has worked with Jeff Cole during all stages of US Hemp Brokerage LLC development.'
const kayla_haddix_bio = 'Kayla is a Hempster with a passion for doing things right.  Compliance is full of rules and regulations that can be confusing. These often require an expert in the industry to make sense of, but where do you even begin? In 2017, she found that the booming Hemp industry was in need of compliance experts who could help build a solid model that any business could follow to ease these regulatory nightmares. Since then, Kayla has assisted companies throughout the country build or update compliant facilities custom-tailored to fit the needs of the supplier/consumer as well as meet local and state regulations. Whether it be cannabinoid or Hemp foods processing, Kayla’s passion for doing it right is a quality that shines. With the USDA and FDA now coming on board with Hemp, compliance and regulatory expertise is now more important than ever. Keeping this in mind, Kayla is dedicated to ensuring that businesses and individuals that want to do this right have the resources they need.'
const tod_bergler_bio = 'He has been an integral part of the Cannabis and Hemp movement back to the early nineties. With a history of working on one of the first legalization efforts in Oregon in 1996. Tod has long standing relationships with key figures in the movement and he has been at the forefront of this movement back to its grassroots days. For over 2 decades, Tod has been a student of Wine and Fine Dining. With this education, he has a unique vision of branding and appealing to consumers. Within the wine industry, he excelled at customer service. As a fine wine purveyor, he learned how to market and sell to a broad-based clientele. With all of this, he can help your brand grow in a very unique and sometimes difficult business environment.'
const julian_bourke_bio = 'Julian originates from Limerick Ireland and Immigrated here to the great state of Colorado back in 2013. He has been in sales between Ireland and the U.S.A for the last 15 years with experience in Media sales, retail, alcohol, and the Cannabis industries. Growing up he pretty much played sports eg… Hurling, Gaelic Football, Soccer, and Rugby. In 2013 he met a couple in Thailand that recommended moving to Boulder and the rest is history. If he did not meet them he would be on  Saskatchewan now!! Julian now enjoys the lifestyle here, whether it is hiking or exploring the mountains in Colorado. His new hobbies since moving here are Golf, Raquetball, and Softball. “I really appreciate the people in the Cannabis industry. The conversations are great as well as the people in the industry.” Julian has worked with our founder, Jeff Cole, in other marketing roles and he is excited to add value to hemp markets.'
const chelsie_pratt_bio = 'Chelsie was born here in Colorado; however, she was raised in central Minnesota. After over 18 years in the cold, she found her way back home at the end of 2019.  Chelsie had been a baker for many years and decided it was time for a career change. She enjoys a challenge and wants to cultivate her skills. She is eager to watch as the U.S. Hemp Brokerage grows and learns all there is to know about the budding hemp industry.'

export const TEAM_MEMBERS = [
  {
    img: FaceJCole,
    fullName: 'Jeffrey L Cole',
    title: 'Founder & President',
    bio_short: `${jeff_cole_bio.slice(0, 130)}...`,
    bio: jeff_cole_bio,
    link: '#pablo'
  },
  {
    img: FaceJill,
    fullName: 'Jill Hodges',
    title: 'Creative Director',
    bio_short: `${jill_hodges_bio.slice(0, 130)}...`,
    bio: jill_hodges_bio
  },
  {
    img: FaceJWebb,
    fullName: 'Jeff Webb',
    title: 'Web Developer',
    bio_short: `${jeff_webb_bio.slice(0, 130)}...`,
    bio: jeff_webb_bio
  },
  {
    img: FaceKHaddix,
    fullName: 'Kayla Haddix',
    title: 'Compliance Team Leader',
    bio_short: `${kayla_haddix_bio.slice(0, 130)}...`,
    bio: kayla_haddix_bio
  },
  {
    img: FaceTBergler,
    fullName: 'Tod Bergler',
    title: 'Craft Product Program Design',
    bio_short: `${tod_bergler_bio.slice(0, 130)}...`,
    bio: tod_bergler_bio
  },
  {
    img: FaceJBourke,
    fullName: 'Julian Bourke',
    title: 'Sales Director',
    bio_short: `${julian_bourke_bio.slice(0, 130)}...`,
    bio: julian_bourke_bio
  },
  {
    img: FaceCPratt,
    fullName: 'Chelsie Pratt',
    title: 'Office Manager',
    bio_short: `${chelsie_pratt_bio.slice(0, 130)}...`,
    bio: chelsie_pratt_bio
  }
]
