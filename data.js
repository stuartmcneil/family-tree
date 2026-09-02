/* ---------------------------------------------------------------------------
   McNeil / Neil family tree — source data
   ---------------------------------------------------------------------------
   Transcribed from four typed family-history sheets held in the family papers:

     S1  "Family history of Stuart John McNeil (Neil)"  — summary sheet
     S2  "Maternal family tree of the Neil / Buck / Woolley / A'Monge family"
     S3  "Innard / Inward family tree 2"  (Swanscombe 1767)
     S4  "Innard / Inward family tree 1"  (Swanscombe 1758)

   Each person is a flat record. Relationships are expressed only by the
   `f` (father) and `mo` (mother) keys — everything else (siblings, children,
   descendant trees) is derived from those at run time. To add a person, add a
   record here; nothing else needs changing.

   Fields
     n    display name (married surname where known)
     nee  maiden name
     b    born        d   died        m   married      div  divorced
     sp   spouse id, or array of ids for more than one marriage
     f    father id   mo  mother id
     occ  occupation / office
     no   array of notes
     src  source sheet(s)
     un   true when the parent link is inferred from the layout of the sheet
          rather than stated outright — shown as a dashed branch on the page
   ------------------------------------------------------------------------- */

const PEOPLE = {

  /* ===================== 1. Living generations ===================== */

  stuart: {
    n: "Stuart John McNeil", nee: "Neil", neeAs: "formerly",
    b: "27 March 1972, 8.32am — Greenwich District Hospital, London",
    m: "19 June 2010, Treowen House, Monmouthshire, Wales",
    div: "2014",
    sp: "eleanor", f: "howard", mo: "lynette", src: "S1, S2, S4, F",
    no: ["Changed surname from Neil to McNeil in 2010."]
  },
  eleanor: {
    n: "Eleanor Mary McNeil", nee: "McBride",
    b: "2 January 1980 — Rothwell, Northamptonshire",
    m: "19 June 2010, Treowen House, Monmouthshire, Wales",
    div: "2014",
    sp: "stuart", src: "S1, S2, F",
    no: ["Changed surname from Neil to McNeil in 2010, with Stuart."]
  },
  isobel_jones: {
    n: "Isobel Jones", b: "25 July 2009",
    f: "stuart", src: "F"
  },
  nate_mcneil: {
    n: "Nate Bootsy McNeil", b: "24 July 2013",
    f: "stuart", src: "F"
  },
  loretta: {
    n: "Loretta Andrea Evans", nee: "Neil",
    b: "Sunday 4 July 1971, 12.27am — Greenwich District Hospital, Greenwich, London",
    m: "11 April 2011, Bristol Registry Office",
    sp: "alun", f: "howard", mo: "lynette", src: "S1, S2",
    no: ["A Celtic ceremony followed on 16 April 2011, performed by the Mayor of Pontardawe, Mr Bob Williams."]
  },
  alun: {
    n: "Alun Huw Evans",
    b: "13 July 1970 — Amman Valley Hospital, Glanamman, Ammanford, Wales",
    m: "11 April 2011, Bristol Registry Office", sp: "loretta", src: "S2"
  },
  sian: { n: "Siân Cyrlas Evans", b: "22 April 1999", f: "alun", src: "S2",
    no: ["Huw's daughter from a previous marriage."] },
  gwennan: { n: "Gwennan Cyrlas Evans", b: "21 December 2004", f: "alun", src: "S2",
    no: ["Huw's daughter from a previous marriage."] },

  /* ===================== 2. Parents & their siblings ===================== */

  howard: {
    n: "Howard Clifford Neil",
    b: "15 April 1947 — at home, 26 Malvern Avenue, Bexleyheath",
    m: "21 June 1969, St Thomas More's RC Church, Long Lane, Bexleyheath, Kent",
    sp: "lynette", f: "tgc_neil", mo: "elsie", src: "S1, S2, S4",
    no: ["Married by the Rt Rev. Fr Francis Hartley."]
  },
  lynette: {
    n: "Lynette Edwina Therese Neil", nee: "Buck",
    b: "20 September 1948, 5.25pm — Digboi Hospital, Digboi, Assam, India",
    m: "21 June 1969, St Thomas More's RC Church, Long Lane, Bexleyheath, Kent",
    sp: "howard", f: "edward_buck", mo: "barbara_woolley", src: "S1, S2",
    no: ["Sheet 1 gives the birth year as '1048' — a typing slip for 1948, as confirmed by sheet 2."]
  },
  lesley: {
    n: "Lesley Valerie Smith", nee: "Neil", b: "11 March 1943",
    sp: "graham_smith", f: "tgc_neil", mo: "elsie", src: "S1, S4"
  },
  graham_smith: { n: "Graham Smith", sp: "lesley", src: "S4" },
  martin_smith: { n: "Martin Smith", f: "graham_smith", mo: "lesley", src: "S4",
    no: ["Adopted son."] },
  ian_smith: { n: "Ian Smith", f: "graham_smith", mo: "lesley", src: "S4" },
  phillip_smith: { n: "Phillip Smith", f: "graham_smith", mo: "lesley", src: "S4" },
  laura_smith: { n: "Laura Smith", f: "graham_smith", mo: "lesley", src: "S4" },

  celine_buck: {
    n: "Celine Isobel Mary Hall", nee: "Buck", b: "30 January 1952",
    m: "25 August 1973, the CS Church, Lion Road, Bexleyheath, Kent",
    sp: "lionel_hall", f: "edward_buck", mo: "barbara_woolley", src: "S1, S2"
  },
  lionel_hall: { n: "Lionel David Hall", b: "20 January 1948",
    m: "25 August 1973", sp: "celine_buck", src: "S2" },
  jonathan_hall: {
    n: "Jonathan Marcus Hall",
    b: "24 May 1980 — Queen Mary's Hospital, Sidcup, Kent",
    m: "2 February 2008, Weybridge Registry Office, Surrey",
    sp: "margarita", f: "lionel_hall", mo: "celine_buck", src: "S2"
  },
  margarita: { n: "Margarita Marrero Perez", b: "11 January 1975 — Firgas, Gran Canaria",
    m: "2 February 2008", sp: "jonathan_hall", src: "S2" },
  hannah_hall: { n: "Hannah Hall", b: "2009", d: "2009",
    f: "jonathan_hall", mo: "margarita", src: "S2" },
  helena_hall: {
    n: "Helena Celine Hall",
    b: "26 September 1981 — Queen Mary's Hospital, Sidcup, Kent",
    div: "2001 and 2009",
    sp: ["neil_thomson", "iqbal_singh", "muhenda"],
    f: "lionel_hall", mo: "celine_buck", src: "S2"
  },
  neil_thomson: { n: "Neil Thomson", sp: "helena_hall",
    m: "27 March, Weybridge Registry Office, Surrey", div: "2001", src: "S2",
    no: ["The sheet gives the marriage year as 1972, which cannot be right for a bride born in 1981; the year is an error in the original."] },
  luke_thomson: { n: "Luke Thomson / Hall", b: "10 September 1999",
    f: "neil_thomson", mo: "helena_hall", src: "S2" },
  iqbal_singh: { n: "Iqbal Singh", sp: "helena_hall",
    m: "9 February 2008, Weybridge Registry Office", div: "2009", src: "S2" },
  muhenda: { n: "Muhenda Bagenda", sp: "helena_hall", m: "engaged 2011", src: "S2" },
  amaia: { n: "Amaia Bagenda", b: "24 September 2011",
    f: "muhenda", mo: "helena_hall", src: "S2" },

  /* ===================== 3. Grandparents ===================== */

  tgc_neil: {
    n: "Thomas George Cyril Neil",
    b: "2 November 1913 — Plaistow, London",
    m: "21 August 1937", div: "1949", d: "14 March 1970 — Guildford, Surrey",
    sp: "elsie", src: "S1, S4",
    no: ["His own parents are not recorded on any of the four sheets — the Neil line stops here."]
  },
  elsie: {
    n: "Elsie Alexandra Neil", nee: "Inward",
    b: "27 July 1914", m: "21 August 1937", div: "1949",
    d: "14 March 2001 — at home in Bexleyheath",
    sp: "tgc_neil", f: "percy_w_inward", mo: "jennette", src: "S1, S4"
  },
  edward_buck: {
    n: "Edward George Buck",
    b: "6 January 1913 — Doranda, Ranchi, Bihar, India",
    m: "9 October 1944, St Thomas' Church, Middleton Row, Calcutta, India",
    d: "25 March 1980 — Brook Hospital, Shooters Hill, Welling",
    sp: "barbara_woolley", f: "joel_buck", mo: "prialodta", src: "S1, S2",
    no: ["Cremation at Falconwood, Kent."]
  },
  barbara_woolley: {
    n: "Barbara Maureen Theresa Buck", nee: "Woolley",
    b: "4 August 1923 — Calcutta, Bengal, India",
    m: "9 October 1944, St Thomas' Church, Middleton Row, Calcutta",
    d: "7 October 1999 — Royal Surrey County Hospital, Guildford",
    sp: "edward_buck", f: "herbert_woolley", mo: "eliz_amonge", src: "S1, S2",
    no: ["Born on arrival in Calcutta in August 1923.",
         "Her aunt Bella A'Monge looked after her when her mother died and was made her legal guardian, after she refused to return to England with her father without her aunts.",
         "Her godmother, Aunt Mary Vincent, lived with her too. Aunts Millie Collard and Mary Robertson and their families also lived in Calcutta.",
         "She attended Loretto Convent with her cousins Mary and Tessie Collard.",
         "Cremation at Woking, Surrey."]
  },

  /* ===================== 4. Buck line ===================== */

  joel_buck: {
    n: "Joel Jefferson Buck",
    b: "15 September 1885 — Bareilly, India", d: "5 October 1960",
    sp: "prialodta", f: "rev_buck", mo: "adams_buck", src: "S1",
    occ: "Confidential Principal Private Secretary to the Governor of Bihar",
    no: ["Served seven Governors in all — 36 years of service.",
         "Honours: Kaisar-i-Hind; Companion of the Imperial Service Order; AFI (Auxiliary Force India) Marksman; Coronation Medal."]
  },
  prialodta: {
    n: "Prialodta Buck", sp: "joel_buck", src: "S1",
    no: ["A Khasi princess.", "Date of death unrecorded; buried at Gresham, Norfolk."]
  },
  joseph_p_buck: { n: "Joseph Pritchard Buck", f: "joel_buck", mo: "prialodta", src: "S1" },
  doreen_buck: { n: "Doreen May Buck", f: "joel_buck", mo: "prialodta", src: "S1" },
  donald_buck: { n: "Donald Buck", f: "joel_buck", mo: "prialodta", src: "S1" },
  rev_buck: { n: "Rev. D. M. Buck", sp: "adams_buck", src: "S1",
    occ: "Clergyman, Lucknow" },
  adams_buck: { n: "Miss Adams", nee: "Adams", sp: "rev_buck", src: "S1",
    no: ["Given on the sheet only as '? ADAMS'."] },
  percys_buck: { n: "Percys Buck", f: "rev_buck", mo: "adams_buck", src: "S1" },
  alfreda_buck: { n: "Alfreda Buck", f: "rev_buck", mo: "adams_buck", src: "S1" },

  /* ===================== 5. Woolley line ===================== */

  herbert_woolley: {
    n: "Herbert Leonard Woolley", b: "31 August 1894",
    m: "10 October 1917, RC Church of the Immaculate Conception, Waverley, Mussoorie, India",
    sp: "eliz_amonge", f: "thomas_woolley", mo: "eliz_burgess", src: "S1, S2",
    occ: "Soldier, British Territorial Army",
    no: ["Addresses in England and India: 4 Hilperton Road, Trowbridge, Wiltshire; and Suite 21, Samavaya Mansions, Calcutta.",
         "Date of death not recorded."]
  },
  thomas_woolley: { n: "Thomas Woolley", sp: "eliz_burgess", src: "S2" },
  eliz_burgess: { n: "Elizabeth Harriet Alma Woolley", nee: "Burgess",
    sp: "thomas_woolley", src: "S2" },
  mabel_woolley: { n: "Mabel Woolley", f: "thomas_woolley", mo: "eliz_burgess", src: "S2" },
  ernest_woolley: {
    n: "Ernest Woolley", b: "1919 — Trowbridge, Wiltshire", d: "1922",
    f: "herbert_woolley", mo: "eliz_amonge", src: "S1, S2",
    no: ["Died aged three on the boat leaving for India, and was buried at sea."]
  },

  /* ===================== 6. A'Monge line ===================== */

  eliz_amonge: {
    n: "Elizabeth Theresa Woolley", nee: "A'Monge",
    b: "1898", m: "19 October 1917", d: "2 August 1932",
    sp: "herbert_woolley", f: "david_amonge_sr", mo: "maureen_ryan", src: "S1, S2"
  },
  david_amonge_sr: {
    n: "David A'Monge", sp: "maureen_ryan", src: "S2",
    occ: "Tea planter, HQ of the Assam Tea Company, Nazira, Sivasagar, Assam",
    no: ["French."]
  },
  maureen_ryan: {
    n: "Maureen Theresa A'Monge", nee: "Ryan", sp: "david_amonge_sr", src: "S2",
    no: ["Irish, from Drogheda, Co. Louth, Eire.",
         "They had ten children in all; the sheets record only those listed here."]
  },
  david_amonge_jr: {
    n: "David A'Monge", b: "18 July 1816/7 (as written)",
    sp: "clara_amonge", f: "david_amonge_sr", mo: "maureen_ryan", src: "S2",
    occ: "Tea planter, Suntok, Nazira Tea Estate, Assam",
    no: ["The birth year as typed cannot be right for a man whose children were born in 1929–32; it is likely 1896/7."]
  },
  clara_amonge: { n: "Clara A'Monge", sp: "david_amonge_jr", src: "S2" },
  edgar_amonge: { n: "Edgar A'Monge", b: "1929", f: "david_amonge_jr", mo: "clara_amonge", src: "S2" },
  margaret_amonge: { n: "Margaret A'Monge", b: "1930", f: "david_amonge_jr", mo: "clara_amonge", src: "S2" },
  unnamed_amonge: { n: "— A'Monge", b: "1932", f: "david_amonge_jr", mo: "clara_amonge", src: "S2",
    no: ["Forename not given on the sheet."] },
  bella_amonge: {
    n: "Bella A'Monge", d: "23 March 1971",
    f: "david_amonge_sr", mo: "maureen_ryan", src: "S1, S2",
    no: ["A spinster.", "'Aunty Bella' — legal guardian of her niece Barbara Woolley."]
  },
  millicent_amonge: {
    n: "Millicent Collard", nee: "A'Monge", m: "married in Calcutta",
    d: "at Farnborough, Hampshire", sp: "leonard_collard",
    f: "david_amonge_sr", mo: "maureen_ryan", src: "S1, S2",
    no: ["'Aunt Millie Collard' of Calcutta in Barbara Woolley's recollection."]
  },
  leonard_collard: { n: "Leonard Collard", sp: "millicent_amonge", src: "S2" },
  mary_amonge: {
    n: "Mary Robertson", nee: "A'Monge", m: "married in Calcutta",
    sp: "robertson_sr", f: "david_amonge_sr", mo: "maureen_ryan", src: "S1, S2",
    no: ["'Aunt Mary Robertson' of Calcutta."]
  },
  robertson_sr: { n: "— Robertson", sp: "mary_amonge", src: "S2",
    no: ["Forename not given on the sheet."] },

  /* ----- Collard / Ansted / Bassett / Mason branch ----- */
  mary_collard: {
    n: "Mary Rodgers", nee: "Collard", b: "1 January 1918",
    d: "1998, in a home in Kent", sp: "dudley_rodgers",
    f: "leonard_collard", mo: "millicent_amonge", src: "S2",
    no: ["One of the cousins Barbara attended Loretto Convent with."]
  },
  dudley_rodgers: { n: "Dudley Rodgers", b: "19 December", d: "at Farnborough, Hampshire",
    sp: "mary_collard", src: "S2" },
  theresa_collard: {
    n: "Theresa Ansted", nee: "Collard", b: "14 March 1921",
    d: "12 March 1991 — Orpington Hospital, Kent", sp: "joseph_ansted_sr",
    f: "leonard_collard", mo: "millicent_amonge", src: "S2",
    no: ["'Tessie' — the other cousin at Loretto Convent."]
  },
  joseph_ansted_sr: { n: "Joseph Ansted", b: "11 January 1922",
    d: "28 February 1993 — Farnborough Hospital, Kent", sp: "theresa_collard", src: "S2" },
  lorraine_ansted: {
    n: "Lorraine Bassett", nee: "Ansted", b: "4 July 1951", m: "12 March 1969",
    sp: "david_bassett", f: "joseph_ansted_sr", mo: "theresa_collard", src: "S2"
  },
  david_bassett: { n: "David Bassett", sp: "lorraine_ansted", src: "S2" },
  joseph_bassett: { n: "Joseph Bassett", b: "19 February 1970",
    f: "david_bassett", mo: "lorraine_ansted", src: "S2" },
  david_bassett_jr: { n: "David Bassett", b: "11 April 1971",
    f: "david_bassett", mo: "lorraine_ansted", src: "S2" },
  carolyn_ansted: {
    n: "Carolyn Mason", nee: "Ansted", b: "12 March 1955", m: "24 May 1980",
    sp: "ronald_mason", f: "joseph_ansted_sr", mo: "theresa_collard", src: "S2"
  },
  ronald_mason: { n: "Ronald Mason", b: "28 October 1927", sp: "carolyn_ansted", src: "S2",
    no: ["Two sons from a previous marriage."] },
  joseph_ansted_jr: {
    n: "Joseph Ansted", b: "9 December 1958", sp: "angela_ansted",
    f: "joseph_ansted_sr", mo: "theresa_collard", src: "S2"
  },
  angela_ansted: { n: "Angela Ansted", b: "22 October 1960", sp: "joseph_ansted_jr", src: "S2" },
  thomas_ansted: { n: "Thomas Ansted", b: "30 August 2006",
    f: "joseph_ansted_jr", mo: "angela_ansted", src: "S2" },

  /* ----- Robertson / Lloyd branch ----- */
  una_robertson: {
    n: "Una Lloyd", nee: "Robertson", m: "married in Calcutta, Bengal, India",
    sp: "lloyd_sr", f: "robertson_sr", mo: "mary_amonge", src: "S2"
  },
  lloyd_sr: { n: "— Lloyd", sp: "una_robertson", src: "S2",
    no: ["Forename not given on the sheet."] },
  christine_lloyd: { n: "Christine Lloyd", f: "lloyd_sr", mo: "una_robertson", src: "S2" },
  darryl_lloyd: { n: "Darryl Lloyd", f: "lloyd_sr", mo: "una_robertson", src: "S2" },
  john_robertson: {
    n: "John Robertson", m: "married in Calcutta, Bengal, India",
    sp: "rita_robertson", f: "robertson_sr", mo: "mary_amonge", src: "S2"
  },
  rita_robertson: { n: "Rita Robertson", sp: "john_robertson", src: "S2" },
  sabrina_robertson: { n: "Sabrina Robertson", b: "1960",
    f: "john_robertson", mo: "rita_robertson", src: "S2" },

  /* ===================== 7. Inward line — Tree 1 ===================== */

  percy_w_inward: {
    n: "Percy William Inward", b: "1871", m: "10 September 1892",
    d: "7 October 1957 — Lewisham Hospital",
    sp: "jennette", f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  jennette: {
    n: "Jennette Elizabeth Inward", nee: "Major", b: "2 June 1872",
    d: "6 June 1952 — Downham, Kent", sp: "percy_w_inward", src: "S4"
  },
  percy_inward_jr: { n: "Percy Inward", sp: "sophia_rand",
    f: "percy_w_inward", mo: "jennette", src: "S4" },
  sophia_rand: { n: "Sophia Inward", nee: "Rand", sp: "percy_inward_jr", src: "S4" },
  percy_inward_3: { n: "Percy Inward", b: "1920", d: "May 1939",
    f: "percy_inward_jr", mo: "sophia_rand", src: "S4" },
  walter_h_inward: { n: "Walter Henry Inward",
    f: "percy_inward_jr", mo: "sophia_rand", src: "S4" },
  frederick_inward_b: { n: "Frederick Inward", sp: "phyllis_loveridge",
    f: "percy_w_inward", mo: "jennette", src: "S4" },
  phyllis_loveridge: { n: "Phyllis Inward", nee: "Loveridge", sp: "frederick_inward_b", src: "S4" },
  william_inward_1900s: { n: "William Inward", b: "27 March", sp: "emily_chapman",
    f: "frederick_inward_b", mo: "phyllis_loveridge", src: "S4",
    no: ["Year of birth and year of death both left incomplete on the sheet."] },
  emily_chapman: { n: "Emily Inward", nee: "Chapman", b: "2 November",
    sp: "william_inward_1900s", src: "S4" },
  ann_inward_1954: { n: "Ann Inward", b: "17 October 1954",
    f: "william_inward_1900s", mo: "emily_chapman", src: "S4" },
  edith_inward_r: { n: "Edith Russell", nee: "Inward", sp: "joseph_russell",
    f: "percy_w_inward", mo: "jennette", src: "S4" },
  joseph_russell: { n: "Joseph Russell", sp: "edith_inward_r", src: "S4" },
  richard_inward: { n: "Richard Inward", b: "1927", d: "1947",
    f: "joseph_russell", mo: "edith_inward_r", src: "S4" },

  george_inward_1840: {
    n: "George Inward", b: "1840", m: "1865, St Mary's, Stone", d: "1914",
    sp: "sarah_hutchings", f: "henry_inward_1814", mo: "ann_townsend", src: "S4",
    occ: "Excavator / stillman", un: true
  },
  sarah_hutchings: { n: "Sarah Inward", nee: "Hutchings", b: "1846",
    m: "1865, St Mary's, Stone", sp: "george_inward_1840", src: "S4" },

  augustus_j_inward: {
    n: "Augustus James Inward", b: "1887 — Silvertown, West Ham",
    m: "1914, St Mark's, Victoria Docks, Silvertown", d: "1980 — Romford",
    sp: "rosetta_moore", f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  rosetta_moore: { n: "Rosetta Inward", nee: "Moore", b: "1887 — West Ham",
    d: "1973 — Romford", sp: "augustus_j_inward", src: "S4" },
  harry_moore_inward: { n: "Harry Moore Inward", b: "1923",
    f: "augustus_j_inward", mo: "rosetta_moore", src: "S4" },
  james_inward_1920: { n: "James Inward", b: "1920",
    f: "augustus_j_inward", mo: "rosetta_moore", src: "S4" },
  christina_inward: { n: "Christina Inward", b: "1917",
    f: "augustus_j_inward", mo: "rosetta_moore", src: "S4" },
  edith_lilly_inward: {
    n: "Edith Lilly Inward", b: "1885 — West Ham", d: "lost on the Titanic",
    sp: "edward_bagley", f: "george_inward_1840", mo: "sarah_hutchings", src: "S4",
    no: ["The sheet records her death only as \"d. 'TITANIC'\" — worth checking against the passenger and crew lists."]
  },
  edward_bagley: { n: "Edward Bagley", sp: "edith_lilly_inward", src: "S4" },
  rosetta_inward: {
    n: "Rosetta Bagley", nee: "Inward", b: "1884 — West Ham",
    m: "1905, Woolwich", sp: "frederick_bagley",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  frederick_bagley: { n: "Frederick Bagley", sp: "rosetta_inward", src: "S4" },
  henry_inward_1881: {
    n: "Henry Inward", b: "1881 — Plaistow, West Ham", sp: "emily_bagley",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4",
    no: ["Emigrated to Canada."]
  },
  emily_bagley: { n: "Emily Inward", nee: "Bagley", sp: "henry_inward_1881", src: "S4" },
  sara_ann_inward: {
    n: "Sara Ann Weiss", nee: "Inward", b: "1879 — West Ham",
    m: "1898, St Luke's, Victoria Docks", sp: "william_weiss",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  william_weiss: { n: "William Aaron Weiss", sp: "sara_ann_inward", src: "S4" },
  arthur_j_inward: {
    n: "Arthur John Inward", b: "1877",
    m: "1898, St Luke's, Victoria Docks", sp: "henrietta_oneil",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4",
    no: ["Settled at Wangi Wangi, New South Wales, Australia."]
  },
  henrietta_oneil: { n: "Henrietta Honor Inward", nee: "O'Neil",
    sp: "arthur_j_inward", src: "S4" },
  sarah_jane_inward: { n: "Sarah Jane Inward", b: "1875 — West Ham",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4" },
  emily_eliza_inward: {
    n: "Emily Eliza Gregory", nee: "Inward", b: "1873 — Silvertown, West Ham",
    m: "1897", sp: "edward_gregory",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  edward_gregory: { n: "Edward Gregory", m: "1897", sp: "emily_eliza_inward", src: "S4" },
  ernest_g_inward: {
    n: "Ernest George Inward", b: "1869", m: "1899", sp: "eliz_beckford",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4"
  },
  eliz_beckford: { n: "Elizabeth Isabella Inward", nee: "Beckford",
    m: "1899", sp: "ernest_g_inward", src: "S4" },
  eliz_inward_1901: { n: "Elizabeth Inward", b: "1901 — West Ham",
    f: "ernest_g_inward", mo: "eliz_beckford", src: "S4",
    no: ["Emigrated to the USA — New York."] },
  frederick_inward_1867: { n: "Frederick Inward", b: "1867 — Poplar",
    bap: "1873 — Silvertown",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4",
    no: ["Moved to Grimsby."] },
  eliza_eliz_inward: { n: "Eliza Elizabeth Inward", b: "1866", d: "1866",
    f: "george_inward_1840", mo: "sarah_hutchings", src: "S4" },

  henry_inward_1814: {
    n: "Henry Inward", b: "1814", sp: "ann_townsend",
    f: "jeremiah_inward_1784", mo: "sarah_onven", src: "S4", un: true
  },
  ann_townsend: { n: "Ann Inward", nee: "Townsend", b: "1810 — Langdon, Essex",
    sp: "henry_inward_1814", src: "S4" },
  william_james_inward: { n: "William James Inward", b: "1848",
    f: "henry_inward_1814", mo: "ann_townsend", src: "S4", un: true },
  eliza_inward_1845: { n: "Eliza Inward", b: "1845", d: "1856",
    f: "henry_inward_1814", mo: "ann_townsend", src: "S4", un: true },
  john_sullinge_inward: { n: "John Sullinge Inward", b: "1843",
    f: "henry_inward_1814", mo: "ann_townsend", src: "S4", un: true },
  maria_inward_1839: { n: "Maria Inward", b: "1839",
    f: "henry_inward_1814", mo: "ann_townsend", src: "S4", un: true },
  henry_thomas_inward: {
    n: "Henry Thomas Inward", b: "1836", sp: "alice_corringham",
    f: "henry_inward_1814", mo: "ann_townsend", src: "S4", un: true
  },
  alice_corringham: { n: "Alice Inward", nee: "Corringham", b: "1840", d: "1904",
    sp: "henry_thomas_inward", src: "S4", no: ["Of Stanford-le-Hope, Essex."] },

  george_inward_1820: { n: "George Inward", b: "1820", sp: "ann_inward_1825",
    f: "jeremiah_inward_1784", mo: "sarah_onven", src: "S4", un: true },
  ann_inward_1825: { n: "Ann Inward", b: "1825 — Chatham", d: "1901",
    sp: "george_inward_1820", src: "S4",
    no: ["The sheet carries both 1901 and 1904 in this column."] },
  william_inward_1866: { n: "William Inward", b: "1866",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  emma_inward_1862: { n: "Emma Inward", b: "1862",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  henry_inward_1859: { n: "Henry Inward", b: "1859", d: "1860",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  george_inward_1857: { n: "George Inward", b: "1857",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  edward_inward_1855: { n: "Edward Inward", b: "1855", d: "1865",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  ann_inward_1853: { n: "Ann Inward", b: "1853",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  frederick_g_inward_1850: { n: "Frederick George Inward", b: "1850", d: "1851",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  emily_fanny_inward: { n: "Emily Fanny Inward", b: "1848",
    f: "george_inward_1820", mo: "ann_inward_1825", src: "S4" },
  charles_inward_1822: { n: "Charles Inward", b: "1822", d: "1822",
    f: "jeremiah_inward_1784", mo: "sarah_onven", src: "S4", un: true },
  eliza_inward_1819: { n: "Eliza Inward", b: "1819", d: "1826",
    f: "jeremiah_inward_1784", mo: "sarah_onven", src: "S4", un: true },
  maria_inward_1811: { n: "Maria Inward", b: "1811", d: "1858",
    f: "jeremiah_inward_1784", mo: "sarah_onven", src: "S4", un: true },

  jeremiah_inward_1784: {
    n: "Jeremiah Inward", b: "1784", m: "1809", d: "1858", sp: "sarah_onven",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true,
    no: ["A twin with Sarah Innard, born 1783."]
  },
  sarah_onven: { n: "Sarah Inward", nee: "Onven", b: "1785", d: "1836",
    m: "1809", sp: "jeremiah_inward_1784", src: "S4" },
  sarah_innard_1783: { n: "Sarah Innard", b: "1783",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true,
    no: ["Twin with Jeremiah, born 1784."] },
  james_innard_1785: { n: "James Innard", b: "1785", m: "1810", d: "1858",
    sp: "sarah_swann", f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  sarah_swann: { n: "Sarah Inward", nee: "Swann", d: "1827", m: "1810",
    sp: "james_innard_1785", src: "S4" },
  unnamed_innard_1787: { n: "— Innard", b: "1787", d: "1787",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true,
    no: ["Forename not given on the sheet."] },
  david_inward_1789: { n: "David Inward", b: "1789", d: "1825",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  samuel_inward_1792: { n: "Samuel Inward", b: "1792", d: "1816",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  mary_inward_1794: { n: "Mary Inward", b: "1794", d: "1858",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  thamer_inward: { n: "Thamer Innard", b: "1797", d: "1810",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  rhoda_innard: { n: "Rhoda Weston", nee: "Innard", b: "1800", m: "1824",
    sp: "wm_weston", f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },
  wm_weston: { n: "Wm. Weston", m: "1824", sp: "rhoda_innard", src: "S4" },
  henry_innard_1802: { n: "Henry Innard", b: "1802", d: "1804",
    f: "james_inward_1758", mo: "eliz_broom", src: "S4", un: true },

  james_inward_1758: {
    n: "James Inward", b: "1758", m: "1782", d: "1840", sp: "eliz_broom",
    f: "samuel_innard_sr", mo: "mary_butcher", src: "S4"
  },
  eliz_broom: { n: "Elizabeth Inward", nee: "Broom", d: "1816", m: "1782",
    sp: "james_inward_1758", src: "S4" },
  benjamin_inward: {
    n: "Benjamin Inward", b: "1760", m: "1778", sp: "martha_phillips",
    f: "samuel_innard_sr", mo: "mary_butcher", src: "S4",
    no: ["Of Crayford."]
  },
  martha_phillips: { n: "Martha Inward", nee: "Phillips", m: "1778",
    sp: "benjamin_inward", src: "S4", no: ["Of Bexley.",
      "Recorded as Martha Inwood in the Maidstone Archive and as Martha Inward in the Latter-day Saints index."] },
  william_innard_1786: { n: "William Innard", b: "1786 — Swanscombe",
    f: "benjamin_inward", mo: "martha_phillips", src: "S4",
    no: ["The sheet gives a death of 1782, before the stated birth — an error in the original."] },
  sarah_inwood_1781: { n: "Sarah Inwood", b: "1781 — Dartford", d: "1792",
    f: "benjamin_inward", mo: "martha_phillips", src: "S4" },
  ann_inward_1780: { n: "Ann Inward", b: "1780",
    f: "benjamin_inward", mo: "martha_phillips", src: "S4" },

  samuel_innard_sr: {
    n: "Samuel Innard", d: "1791", sp: ["mary_butcher", "jane_spinney"], src: "S4",
    m: "1758 (1st) and 1767 (2nd)",
    no: ["Of Swanscombe.", "Married first Mary Butcher in 1758; married second, as a widower, Jane Spinney in 1767."]
  },
  mary_butcher: { n: "Mary Innard", nee: "Butcher", d: "1762", m: "1758",
    sp: "samuel_innard_sr", src: "S4", no: ["First wife."] },
  jane_spinney: { n: "Jane Innard", nee: "Spinney", d: "1782", m: "1767",
    sp: "samuel_innard_sr", src: "S4", no: ["Second wife."] },
  william_innard_1773: { n: "William Innard", b: "1773",
    f: "samuel_innard_sr", mo: "jane_spinney", src: "S4" },
  john_innard_1770: { n: "John Innard", b: "1770", d: "1774", dp: "darenth",
    f: "samuel_innard_sr", mo: "jane_spinney", src: "S4",
    no: ["John and his brother Samuel died in a fire at Gore Farm, Darenth, on 2 April 1774."] },
  samuel_innard_1768: { n: "Samuel Innard", b: "1768", d: "1774", dp: "darenth",
    f: "samuel_innard_sr", mo: "jane_spinney", src: "S4",
    no: ["Died with his brother John in the fire at Gore Farm, Darenth, 2 April 1774."] },
  james_illegit: { n: "James Innard", bap: "1795 — Crayford",
    f: "samuel_innard_sr", src: "S4", un: true,
    no: ["Recorded on the sheet as illegitimate."] },
  martha_inward_newman: { n: "Martha Newman", nee: "Inward", m: "1798, Wilmington",
    sp: "edward_newman", f: "samuel_innard_sr", src: "S4", un: true },
  edward_newman: { n: "Edward Newman", m: "1798, Wilmington",
    sp: "martha_inward_newman", src: "S4" },
  sarah_inward_bevan: { n: "Sarah Bevan", nee: "Inward", m: "1806, Wilmington",
    sp: "walter_bevan", f: "samuel_innard_sr", src: "S4", un: true },
  walter_bevan: { n: "Walter Bevan", m: "1806, Wilmington",
    sp: "sarah_inward_bevan", src: "S4" },

  /* ===================== 8. Inward line — Tree 2 =====================
     A second Swanscombe cluster, headed "Innard / Inward Family Tree 2,
     Swanscombe 1767". The sheets do not state how it joins Tree 1.       */

  jeremiah_innard_t2: {
    n: "Jeremiah Innard", d: "1773", sp: "sarah_butcher_t2", src: "S3",
    no: ["Also written Jeremiah Enward.", "Swanscombe, 1767."]
  },
  sarah_butcher_t2: { n: "Sarah Inward", nee: "Butcher",
    sp: "jeremiah_innard_t2", src: "S3" },
  sarah_inward_rixon: { n: "Sarah Rixon", nee: "Inward", m: "1774", d: "1826",
    sp: "george_rixon", f: "jeremiah_innard_t2", mo: "sarah_butcher_t2", src: "S3", un: true },
  george_rixon: { n: "George Rixon", m: "1774", sp: "sarah_inward_rixon", src: "S3" },
  mary_innard_1773: { n: "Mary Innard", b: "1773",
    f: "jeremiah_innard_t2", mo: "sarah_butcher_t2", src: "S3", un: true },
  john_innard_1789: { n: "John Innard", b: "1789", mo: "mary_innard_1773", src: "S3",
    no: ["Recorded as a natural son."] },
  mary_inward_pinson: { n: "Mary Pinson", nee: "Inward", m: "1828",
    sp: "george_pinson", mo: "mary_innard_1773", src: "S3", un: true,
    no: ["A widow when she married George Pinson, himself a widower."] },
  george_pinson: { n: "George Pinson", m: "1828", sp: "mary_inward_pinson", src: "S3",
    no: ["A widower."] },

  thomas_innard_t2: { n: "Thomas Innard", sp: "elisabeth_innard_t2", src: "S3" },
  elisabeth_innard_t2: { n: "Elisabeth Innard", sp: "thomas_innard_t2", src: "S3" },
  william_innard_1787: { n: "William Innard", b: "1787",
    f: "thomas_innard_t2", mo: "elisabeth_innard_t2", src: "S3" },

  john_inward_1826: { n: "John Inward", b: "1826 — Rochford, Essex",
    sp: "emma_inward_1835", src: "S3", no: ["Reference: 1841 Census."] },
  emma_inward_1835: { n: "Emma Inward", b: "1835? — Broomfield, Essex",
    sp: "john_inward_1826", src: "S3" },
  emma_inward_1861: { n: "Emma Inward", b: "1861 — Upminster",
    f: "john_inward_1826", mo: "emma_inward_1835", src: "S3" },
  william_inward_1863: { n: "William Inward", b: "1863 — Upminster",
    f: "john_inward_1826", mo: "emma_inward_1835", src: "S3" },
  john_inward_1864: { n: "John Inward", b: "1864 — Upminster",
    f: "john_inward_1826", mo: "emma_inward_1835", src: "S3" },
  ellen_inward_1868: { n: "Ellen Inward", b: "1868 — Swanscombe",
    f: "john_inward_1826", mo: "emma_inward_1835", src: "S3" },
  alice_inward_1870: { n: "Alice Inward", b: "1870 — Swanscombe",
    f: "john_inward_1826", mo: "emma_inward_1835", src: "S3" },

  david_inward_1796: { n: "David Inward", b: "1796", m: "1828",
    sp: "mary_martin", src: "S3" },
  mary_martin: { n: "Mary Inward", nee: "Martin", b: "1796", m: "1828",
    sp: "david_inward_1796", src: "S3" },
  james_inward_1791: { n: "James Inward", b: "1791", sp: "mary_inward_1796b", src: "S3" },
  mary_inward_1796b: { n: "Mary Inward", b: "1796", sp: "james_inward_1791", src: "S3" },

  david_inward_1827: { n: "David Inward", b: "1827",
    f: "david_inward_1796", mo: "mary_martin", src: "S3", un: true },
  henry_inward_1826b: { n: "Henry Inward", b: "1826", sp: "louisa_inward",
    f: "david_inward_1796", mo: "mary_martin", src: "S3", un: true },
  louisa_inward: { n: "Louisa Inward", b: "1833 — Leigh", sp: "henry_inward_1826b", src: "S3" },
  francis_inward_1823: { n: "Francis Inward", b: "1823", d: "1847",
    f: "david_inward_1796", mo: "mary_martin", src: "S3", un: true },
  charles_inward_1822b: { n: "Charles Inward", b: "1822",
    f: "david_inward_1796", mo: "mary_martin", src: "S3", un: true },
  william_inward_1820: { n: "William Inward", b: "1820", m: "1843",
    sp: "sarah_inward_1843m", f: "david_inward_1796", mo: "mary_martin", src: "S3", un: true },
  sarah_inward_1843m: { n: "Sarah Inward", m: "1843", sp: "william_inward_1820", src: "S3" },
  william_inward_1837: { n: "William Inward", b: "1837", d: "1841",
    f: "william_inward_1820", mo: "sarah_inward_1843m", src: "S3" },
  william_inward_1843b: { n: "William Inward", b: "1843",
    f: "william_inward_1820", mo: "sarah_inward_1843m", src: "S3" },
  eliza_inward_1847: { n: "Eliza Inward", b: "1847",
    f: "william_inward_1820", mo: "sarah_inward_1843m", src: "S3" },

  david_inward_1816: { n: "David Inward", b: "1816", sp: "ann_smith", src: "S3" },
  ann_smith: { n: "Ann Inward", nee: "Smith", b: "1816 — Horton Kirby",
    sp: "david_inward_1816", src: "S3" },
  tamar_inward: { n: "Tamar Inward", b: "1812", src: "S3" },
  daniel_inward: { n: "Daniel Inward", b: "1814", sp: "jane_lane", src: "S3" },
  jane_lane: { n: "Jane Inward", nee: "Lane", b: "1818?", sp: "daniel_inward", src: "S3" },
  mary_inward_1816: { n: "Mary Inward", b: "1816", src: "S3" },
  william_inward_1819: { n: "William Inward", b: "1819", d: "1820", src: "S3" },
  william_john_inward: { n: "William John Inward", b: "1826", src: "S3" },
  ann_inward_1824: { n: "Ann Ellis", nee: "Inward", b: "1824", sp: "john_ellis", src: "S3" },
  john_ellis: { n: "John Ellis", sp: "ann_inward_1824", src: "S3" },
  susannah_inward: { n: "Susannah Pinson", nee: "Inward", b: "1830",
    sp: "john_pinson", src: "S3" },
  john_pinson: { n: "John Pinson", sp: "susannah_inward", src: "S3" },

  elizabeth_inward_1853: { n: "Elizabeth Inward", b: "1853", d: "1862",
    f: "daniel_inward", mo: "jane_lane", src: "S3" },
  john_inward_1850: { n: "John Inward", b: "1850",
    f: "daniel_inward", mo: "jane_lane", src: "S3" },
  charles_inward_1847: { n: "Charles Inward", b: "1847", sp: "mary_a_inward",
    f: "daniel_inward", mo: "jane_lane", src: "S3" },
  mary_a_inward: { n: "Mary A. Inward", b: "1857", sp: "charles_inward_1847", src: "S3" },
  alfred_inward_1843: { n: "Alfred Inward", b: "1843",
    f: "daniel_inward", mo: "jane_lane", src: "S3" },
  william_inward_1878: { n: "William Inward", b: "1878",
    f: "charles_inward_1847", mo: "mary_a_inward", src: "S3" },
  walter_inward_1879: { n: "Walter Inward", b: "1879",
    f: "charles_inward_1847", mo: "mary_a_inward", src: "S3" },
  ernest_inward_1880: { n: "Ernest Inward", b: "1880",
    f: "charles_inward_1847", mo: "mary_a_inward", src: "S3" },

  william_francis_inward: { n: "William Francis Inward", b: "1838",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true },
  jerimiah_inward_1841: { n: "Jerimiah Inward", b: "1841", d: "1900",
    sp: "sarah_inward_hartley", f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true },
  sarah_inward_hartley: { n: "Sarah Inward", d: "1920", sp: "jerimiah_inward_1841",
    src: "S3", no: ["Of Hartley, Devon."] },
  mary_ann_inward_1843: { n: "Mary Ann Inward", b: "1843", sp: "charles_inward_c",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true },
  charles_inward_c: { n: "Charles Inward", sp: "mary_ann_inward_1843", src: "S3" },
  henry_inward_1864: { n: "Henry Inward", b: "1864",
    f: "charles_inward_c", mo: "mary_ann_inward_1843", src: "S3" },
  charles_inward_1876: { n: "Charles Inward", b: "1876",
    f: "charles_inward_c", mo: "mary_ann_inward_1843", src: "S3" },
  sarah_inward_1847: { n: "Sarah Inward", b: "1847", d: "1855",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true,
    no: ["A twin with Martha."] },
  martha_inward_1847: { n: "Martha Inward", b: "1847",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true,
    no: ["A twin with Sarah."] },
  george_inward_1849: { n: "George Inward", b: "1849", sp: "mary_inward_g",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true },
  mary_inward_g: { n: "Mary Inward", sp: "george_inward_1849", src: "S3" },
  george_inward_1879: { n: "George Inward", b: "1879",
    f: "george_inward_1849", mo: "mary_inward_g", src: "S3" },
  ann_inward_1880: { n: "Ann Inward", b: "1880",
    f: "george_inward_1849", mo: "mary_inward_g", src: "S3" },
  elisabeth_inward_1854: { n: "Elisabeth Inward", b: "1854",
    f: "david_inward_1816", mo: "ann_smith", src: "S3", un: true },

  elisabeth_martha_inward: { n: "Elisabeth Martha Inward", b: "1866",
    d: "1946 — Swanscombe", f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  ann_selina_inward: { n: "Ann Selina Inward", b: "1868", d: "1901",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  sarah_june_inward: { n: "Sarah June Inward", b: "1871",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  george_william_inward: { n: "George William Inward", b: "1873", d: "1904",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  james_henry_inward: { n: "James Henry Inward", b: "1875",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  emma_inward_1879: { n: "Emma Inward", b: "1879",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  william_inward_1882: { n: "William Inward", b: "1882", d: "1928",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  alice_inward_1883: { n: "Alice Inward", b: "1883",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },
  ada_inward_1886: { n: "Ada Inward", b: "1886", d: "1978 — Swanscombe",
    f: "jerimiah_inward_1841", mo: "sarah_inward_hartley", src: "S3" },

  henry_inward_1838b: {
    n: "Henry Inward", b: "1838 — Swanscombe", sp: "alice_inward_1842", src: "S3",
    no: ["Of Botany Bay, Eagle Place.", "References: 1871 and 1881 Censuses."]
  },
  alice_inward_1842: { n: "Alice Inward", b: "1842", sp: "henry_inward_1838b", src: "S3" },
  alice_maria_inward: { n: "Alice Maria Inward", b: "1864",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  george_inward_1865: { n: "George Inward", b: "1865",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  james_oliver_inward: { n: "James Oliver Inward", b: "1866",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3",
    no: ["Typed as 1966 on the sheet — plainly 1866."] },
  sarah_jane_inward_t2: { n: "Sarah Jane Inward", b: "1867",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  henry_inward_1868: { n: "Henry Inward", b: "1868",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  joseph_inward_1870: { n: "Joseph Inward", b: "1870",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  isabella_inward_1872: { n: "Isabella Inward", b: "1872",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  eliza_inward_1873: { n: "Eliza Inward", b: "1873",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  selina_jane_inward: { n: "Selina Jane Inward", b: "1881",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" },
  william_alfred_inward: { n: "William Alfred Inward", b: "1885",
    f: "henry_inward_1838b", mo: "alice_inward_1842", src: "S3" }
};

/* The person the ancestor tree grows from. */
const ROOT_ID = "stuart";

/* Progenitors offered in the "Wider family" explorer. */
const PROGENITORS = [
  { id: "samuel_innard_sr", label: "Samuel Innard of Swanscombe (m. 1758)",
    note: "Inward / Innard Tree 1 — the direct paternal line" },
  { id: "david_amonge_sr", label: "David A'Monge & Maureen Ryan",
    note: "The Assam and Calcutta family — A'Monge, Woolley, Collard, Robertson" },
  { id: "rev_buck", label: "Rev. D. M. Buck of Lucknow",
    note: "The Buck line" },
  { id: "thomas_woolley", label: "Thomas Woolley & Elizabeth Burgess",
    note: "The Woolley line" },
  { id: "jeremiah_innard_t2", label: "Jeremiah Innard (d. 1773)",
    note: "Inward / Innard Tree 2 — Swanscombe, 1767" },
  { id: "david_inward_1816", label: "David Inward b. 1816 & Ann Smith",
    note: "Tree 2 — the Swanscombe / Botany Bay households" },
  { id: "daniel_inward", label: "Daniel Inward b. 1814 & Jane Lane",
    note: "Tree 2" },
  { id: "david_inward_1796", label: "David Inward b. 1796 & Mary Martin",
    note: "Tree 2" },
  { id: "henry_inward_1838b", label: "Henry Inward b. 1838 & Alice",
    note: "Tree 2 — Botany Bay, Eagle Place, Swanscombe" },
  { id: "john_inward_1826", label: "John Inward b. 1826 & Emma",
    note: "Tree 2 — Rochford and Upminster, Essex" },
  { id: "thomas_innard_t2", label: "Thomas & Elisabeth Innard",
    note: "Tree 2" }
];

/* ---------------------------------------------------------------------------
   Gazetteer
   ---------------------------------------------------------------------------
   Birth and death places are worked out by scanning each person's `b`, `bap`
   and `d` text for the aliases below — so adding a person with a place already
   in this list puts them on the map with no extra work. ORDER MATTERS: the
   first alias that appears in the text wins, so the most specific places are
   listed first and the county-level fallbacks last.

   Set `bp` / `dp` on a person to override the guess with a place key — used
   where the place is only mentioned in the notes (the Gore Farm fire, say).

   `approx: true` marks a place recorded only as a county or region; those are
   drawn as hollow rings on the map rather than solid pins.
   ------------------------------------------------------------------------- */
const PLACES = [
  // --- London and the Thames-side parishes ---
  { k:"greenwich",   n:"Greenwich",            r:"England", lat:51.483, lon:-0.008, alias:["Greenwich"] },
  { k:"plaistow",    n:"Plaistow",             r:"England", lat:51.532, lon: 0.018, alias:["Plaistow"] },
  { k:"silvertown",  n:"Silvertown",           r:"England", lat:51.502, lon: 0.045, alias:["Silvertown"] },
  { k:"poplar",      n:"Poplar",               r:"England", lat:51.509, lon:-0.018, alias:["Poplar"] },
  { k:"westham",     n:"West Ham",             r:"England", lat:51.534, lon: 0.000, alias:["West Ham"] },
  { k:"lewisham",    n:"Lewisham",             r:"England", lat:51.462, lon:-0.010, alias:["Lewisham"] },
  { k:"downham",     n:"Downham",              r:"England", lat:51.413, lon: 0.023, alias:["Downham"] },

  // --- north-west Kent and the Bexley parishes ---
  { k:"bexleyheath", n:"Bexleyheath",          r:"England", lat:51.456, lon: 0.149, alias:["Bexleyheath"] },
  { k:"bexley",      n:"Bexley",               r:"England", lat:51.441, lon: 0.149, alias:["Bexley"] },
  { k:"welling",     n:"Welling & Shooters Hill", r:"England", lat:51.462, lon:0.106, alias:["Shooters Hill","Welling"] },
  { k:"falconwood",  n:"Falconwood",           r:"England", lat:51.459, lon: 0.076, alias:["Falconwood"] },
  { k:"sidcup",      n:"Sidcup",               r:"England", lat:51.426, lon: 0.103, alias:["Sidcup"] },
  { k:"orpington",   n:"Orpington",            r:"England", lat:51.374, lon: 0.098, alias:["Orpington"] },
  { k:"farnb_kent",  n:"Farnborough, Kent",    r:"England", lat:51.366, lon: 0.080, alias:["Farnborough Hospital","Farnborough, Kent"] },
  { k:"swanscombe",  n:"Swanscombe",           r:"England", lat:51.447, lon: 0.300, alias:["Swanscombe"] },
  { k:"stone",       n:"Stone, Kent",          r:"England", lat:51.448, lon: 0.276, alias:["Stone, Kent"] },
  { k:"dartford",    n:"Dartford",             r:"England", lat:51.446, lon: 0.217, alias:["Dartford"] },
  { k:"crayford",    n:"Crayford",             r:"England", lat:51.449, lon: 0.177, alias:["Crayford"] },
  { k:"wilmington",  n:"Wilmington, Kent",     r:"England", lat:51.432, lon: 0.223, alias:["Wilmington"] },
  { k:"darenth",     n:"Darenth",              r:"England", lat:51.420, lon: 0.240, alias:["Darenth","Gore Farm"] },
  { k:"hortonkirby", n:"Horton Kirby",         r:"England", lat:51.390, lon: 0.240, alias:["Horton Kirby"] },
  { k:"chatham",     n:"Chatham",              r:"England", lat:51.380, lon: 0.520, alias:["Chatham"] },

  // --- Essex ---
  { k:"romford",     n:"Romford",              r:"England", lat:51.575, lon: 0.183, alias:["Romford"] },
  { k:"upminster",   n:"Upminster",            r:"England", lat:51.557, lon: 0.251, alias:["Upminster"] },
  { k:"rochford",    n:"Rochford",             r:"England", lat:51.580, lon: 0.710, alias:["Rochford"] },
  { k:"broomfield",  n:"Broomfield",           r:"England", lat:51.770, lon: 0.470, alias:["Broomfield"] },
  { k:"leigh",       n:"Leigh-on-Sea",         r:"England", lat:51.542, lon: 0.648, alias:["Leigh"] },
  { k:"stanford",    n:"Stanford-le-Hope",     r:"England", lat:51.515, lon: 0.429, alias:["Stanford-le-Hope"] },
  { k:"langdon",     n:"Langdon Hills",        r:"England", lat:51.556, lon: 0.420, alias:["Langdon"] },

  // --- Surrey, Hampshire and the west ---
  { k:"guildford",   n:"Guildford",            r:"England", lat:51.236, lon:-0.570, alias:["Guildford"] },
  { k:"woking",      n:"Woking",               r:"England", lat:51.316, lon:-0.560, alias:["Woking"] },
  { k:"weybridge",   n:"Weybridge",            r:"England", lat:51.372, lon:-0.459, alias:["Weybridge"] },
  { k:"farnb_hants", n:"Farnborough, Hampshire", r:"England", lat:51.290, lon:-0.753, alias:["Farnborough, Hampshire","Farnborough, Hants"] },
  { k:"trowbridge",  n:"Trowbridge",           r:"England", lat:51.320, lon:-2.210, alias:["Trowbridge"] },
  { k:"rothwell",    n:"Rothwell, Northants",  r:"England", lat:52.419, lon:-0.801, alias:["Rothwell"] },
  { k:"grimsby",     n:"Grimsby",              r:"England", lat:53.567, lon:-0.080, alias:["Grimsby"] },
  { k:"gresham",     n:"Gresham, Norfolk",     r:"England", lat:52.900, lon: 1.260, alias:["Gresham"] },
  { k:"london",      n:"London",               r:"England", lat:51.507, lon:-0.128, alias:["London"] },

  // --- Wales and Ireland ---
  { k:"ammanford",   n:"Ammanford & Glanamman", r:"Wales",  lat:51.795, lon:-3.996, alias:["Ammanford","Glanamman","Amman Valley"] },
  { k:"monmouth",    n:"Monmouthshire",        r:"Wales",   lat:51.790, lon:-2.850, alias:["Monmouthshire"] },
  { k:"drogheda",    n:"Drogheda, Co. Louth",  r:"Ireland", lat:53.718, lon:-6.348, alias:["Drogheda"] },

  // --- India ---
  { k:"digboi",      n:"Digboi, Assam",        r:"India",   lat:27.393, lon:95.618, alias:["Digboi"] },
  { k:"nazira",      n:"Nazira, Sivasagar",    r:"India",   lat:26.920, lon:94.730, alias:["Nazira","Sivasagar","Suntok"] },
  { k:"ranchi",      n:"Doranda, Ranchi",      r:"India",   lat:23.340, lon:85.310, alias:["Doranda","Dorunda","Ranchi"] },
  { k:"calcutta",    n:"Calcutta (Kolkata)",   r:"India",   lat:22.573, lon:88.364, alias:["Calcutta","Kolkata"] },
  { k:"bareilly",    n:"Bareilly",             r:"India",   lat:28.367, lon:79.430, alias:["Bareilly"] },
  { k:"mussoorie",   n:"Mussoorie",            r:"India",   lat:30.455, lon:78.070, alias:["Mussoorie","Musoorie","Waverley"] },
  { k:"lucknow",     n:"Lucknow",              r:"India",   lat:26.850, lon:80.950, alias:["Lucknow"] },

  // --- further afield ---
  { k:"firgas",      n:"Firgas, Gran Canaria", r:"Canary Islands", lat:28.100, lon:-15.560, alias:["Firgas","Gran Canaria","Gran Canarias"] },
  { k:"wangi",       n:"Wangi Wangi, NSW",     r:"Australia", lat:-33.070, lon:151.590, alias:["Wangi Wangi","Wangi-Wangi"] },
  { k:"newyork",     n:"New York",             r:"United States", lat:40.713, lon:-74.006, alias:["New York"] },
  { k:"titanic",     n:"North Atlantic — RMS Titanic", r:"At sea", lat:41.726, lon:-49.948, alias:["Titanic"] },

  // --- county-level fallbacks: only reached when nothing above matched ---
  { k:"kent",        n:"Kent (county only)",   r:"England", lat:51.250, lon: 0.700, alias:["Kent"], approx:true },
  { k:"essex",       n:"Essex (county only)",  r:"England", lat:51.750, lon: 0.550, alias:["Essex"], approx:true },
  { k:"surrey",      n:"Surrey (county only)", r:"England", lat:51.250, lon:-0.450, alias:["Surrey"], approx:true },
  { k:"hants",       n:"Hampshire (county only)", r:"England", lat:51.050, lon:-1.320, alias:["Hampshire","Hants"], approx:true },
  { k:"wilts",       n:"Wiltshire (county only)", r:"England", lat:51.350, lon:-1.990, alias:["Wiltshire","Wilts"], approx:true },
  { k:"northants",   n:"Northamptonshire (county only)", r:"England", lat:52.270, lon:-0.880, alias:["Northamptonshire"], approx:true },
  { k:"norfolk",     n:"Norfolk (county only)", r:"England", lat:52.630, lon: 1.000, alias:["Norfolk"], approx:true },
  { k:"devon",       n:"Devon (county only)",  r:"England", lat:50.720, lon:-3.760, alias:["Devon"], approx:true },
  { k:"wales",       n:"Wales (country only)", r:"Wales",   lat:52.130, lon:-3.780, alias:["Wales"], approx:true },
  { k:"assam",       n:"Assam (region only)",  r:"India",   lat:26.200, lon:92.900, alias:["Assam"], approx:true },
  { k:"bengal",      n:"Bengal (region only)", r:"India",   lat:23.500, lon:87.500, alias:["Bengal"], approx:true },
  { k:"bihar",       n:"Bihar (region only)",  r:"India",   lat:25.100, lon:85.300, alias:["Bihar"], approx:true },
  { k:"india",       n:"India (country only)", r:"India",   lat:22.000, lon:79.000, alias:["India"], approx:true },
  { k:"canada",      n:"Canada (country only)", r:"Canada", lat:56.100, lon:-106.300, alias:["Canada"], approx:true },
  { k:"usa",         n:"USA (country only)",   r:"United States", lat:39.800, lon:-98.600, alias:["USA","United States"], approx:true }
];

/* ---------------------------------------------------------------------------
   Families
   ---------------------------------------------------------------------------
   A person belongs to a family by the surname they carried and by the surname
   they were born with, so a woman appears under both — Elsie Alexandra Neil
   née Inward is a Neil and an Inward.
   ------------------------------------------------------------------------- */
const FAMILIES = [
  { k:"neil", label:"Neil · McNeil", surnames:["Neil","McNeil"],
    blurb:"The name the tree carries today. It runs back only as far as Thomas George Cyril Neil, born in Plaistow in 1913 — no sheet records his parents. Stuart and Eleanor changed the spelling to McNeil in 2010." },
  { k:"inward", label:"Inward · Innard", surnames:["Inward","Innard","Inwood"],
    blurb:"The deepest line on the sheets: cement workers, excavators and labourers of Swanscombe, Stone and Dartford in north-west Kent, back to Samuel Innard's marriage in 1758, and out to the West Ham and Silvertown docks in the 1800s." },
  { k:"buck", label:"Buck", surnames:["Buck"],
    blurb:"An Anglo-Indian line: Rev. D. M. Buck of Lucknow, his son Joel Jefferson Buck of Bareilly — private secretary to seven Governors of Bihar — and Joel's son Edward, who brought the family to Kent." },
  { k:"woolley", label:"Woolley", surnames:["Woolley"],
    blurb:"Trowbridge in Wiltshire and Calcutta in the same breath. Herbert Leonard Woolley married Elizabeth Theresa A'Monge at Mussoorie in 1917; their daughter Barbara was born on arrival in Calcutta in 1923." },
  { k:"amonge", label:"A’Monge", surnames:["A'Monge","A’Monge"],
    blurb:"A French tea planter at the Assam Tea Company's headquarters in Nazira and an Irishwoman from Drogheda, and the ten children they raised between Assam and Calcutta." },
  { k:"related", label:"Other names", surnames:[], rest:true,
    blurb:"Everyone in the tree carrying a name of their own — those who married in and the families they brought with them, and the children who took another surname: Collard, Ansted, Bassett, Mason, Hall, Robertson, Lloyd, Evans, Jones, Smith and the rest." }
];

const SOURCES = {
  S1: "Family history of Stuart John McNeil (Neil) — summary sheet",
  S2: "Maternal family tree of the Neil / Buck / Woolley / A'Monge family",
  S3: "Innard / Inward family tree 2 — Swanscombe, 1767",
  S4: "Innard / Inward family tree 1 — Swanscombe, 1758",
  F:  "Family knowledge — not on the four sheets"
};
