<template>
  <main>
    <div>
      <section class="bg-secondary -mt-5 py-8 antialiased md:py-16">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900">
                  Delivery Details
                </h2>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-country-input-3"
                        class="block text-sm font-medium text-gray-900"
                      >
                        State*
                      </label>
                    </div>
                    <q-select
                      id="select-country-input-3"
                      dense
                      borderless
                      :options="states"
                      option-value="name"
                      option-label="name"
                      emit-value
                      map-options
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      v-model="address.state"
                    />
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-city-input-3"
                        class="block text-sm font-medium text-gray-900"
                      >
                        City*
                      </label>
                    </div>
                    <q-select
                      id="select-city-input-3"
                      v-model="address.area"
                      borderless
                      dense
                      :options="cities"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      for="Bustop"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Bustop / Junction*
                    </label>
                    <input
                      type="text"
                      id="Bustop"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Bustop / Junction"
                      required
                      v-model="address.bustop"
                    />
                  </div>

                  <div>
                    <label
                      for="street"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Street
                    </label>
                    <input
                      type="text"
                      id="street"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Street"
                      required
                      v-model="address.street"
                    />
                  </div>

                  <div class="col-span-2">
                    <label
                      for="address1"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Home Address
                    </label>
                    <input
                      type="text"
                      id="address1"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Home Adress"
                      required
                      v-model="address.address"
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900">Payment</h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div
                    class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4"
                  >
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900"
                        >
                          Credit Card
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4"
                  >
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900"
                        >
                          Payment on delivery
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          +<span v-naira="1000"></span> payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
            >
              <div class="flow-root">
                <div class="-my-3">
                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500">
                      Subtotal
                    </dt>
                    <dd
                      class="text-base font-medium text-gray-900"
                      v-naira="CartTotalPrice"
                    ></dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500">
                      Delivery
                    </dt>
                    <dd
                      class="text-base font-medium text-gray-900"
                      v-naira="delivery_price"
                    ></dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500">Tax</dt>
                    <dd
                      class="text-base font-medium text-gray-900"
                      v-naira="tax"
                    ></dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900">Total</dt>
                    <dd
                      class="text-base font-bold text-gray-900"
                      v-naira="sumAmount"
                    ></dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <q-btn
                  type="button"
                  class="flex w-full items-center justify-center rounded-lg bg-accent text-white px-5 py-2.5 text-sm font-medium"
                  @click="checkout"
                  :loading="isLoading"
                  flat
                  no-caps
                >
                  Proceed to Payment
                </q-btn>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { CartItems, CartTotalPrice } = useCartStore();
let { user, routeTo } = useAppStore();
const delivery_price = 2500;
const tax = 150;
const sumAmount = computed(() => delivery_price + tax + CartTotalPrice);
const isLoading = ref(false);
const router = useRouter();
const token = useCookie("token").value;


if (!user) {
  routeTo = "/checkout";
  router.push("/auth/login");
}

const { data: addresses } = await useFetch("/api/main/checkout/address", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const states = [
  {
    code: "FC",
    name: "Abuja",
    capital: "",
    lat: "8.831122799397733",
    long: "7.172467300000001",
    lgas: ["Abuja", "Kwali", "Kuje", "Gwagwalada", "Bwari", "Abaji"],
  },
  {
    code: "AB",
    name: "Abia",
    capital: "Umuahia",
    lat: "5.45409529947607",
    long: "7.5153071",
    lgas: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikawuno",
      "Ikwuano",
      "Isiala-Ngwa North",
      "Isiala-Ngwa South",
      "Isuikwuato",
      "Umu Nneochi",
      "Obi Ngwa",
      "Obioma Ngwa",
      "Ohafia",
      "Ohaozara",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa West",
      "Ukwa East",
      "Umuahia North",
      "Umuahia South",
    ],
  },
  {
    code: "AD",
    name: "Adamawa",
    capital: "Yola",
    lat: "9.512977199417053",
    long: "12.388188699999999",
    lgas: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi-North",
      "Mubi-South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South",
    ],
  },
  {
    code: "AK",
    name: "AkwaIbom",
    capital: "Uyo",
    lat: "4.940863799511036",
    long: "7.8412267",
    lgas: [
      "Abak",
      "Eastern-Obolo",
      "Eket",
      "Esit-Eket",
      "Essien-Udim",
      "Etim-Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo-Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot-Abasi",
      "Ikot-Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot-Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanafun",
      "Urue-Offong/Oruko",
      "Uruan",
      "Uyo",
    ],
  },
  {
    code: "AN",
    name: "Anambra",
    capital: "Awka",
    lat: "6.2183135994341985",
    long: "6.9531842",
    lgas: [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili-North",
      "Idemili-South",
      "Ihiala",
      "Njikoka",
      "Nnewi-North",
      "Nnewi-South",
      "Ogbaru",
      "Onitsha-North",
      "Onitsha-South",
      "Orumba-North",
      "Orumba-South",
    ],
  },
  {
    code: "BA",
    name: "Bauchi",
    capital: "Bauchi",
    lat: "10.622828399473097",
    long: "10.028775399999999",
    lgas: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas Gadau",
      "Jama'Are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa-Balewa",
      "Toro",
      "Warji",
      "Zaki",
    ],
  },
  {
    code: "BY",
    name: "Bayelsa",
    capital: "Yenagoa",
    lat: "4.762978599524332",
    long: "6.028898",
    lgas: [
      "Brass",
      "Ekeremor",
      "Kolokuma Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern-Ijaw",
      "Yenagoa",
    ],
  },
  {
    code: "BE",
    name: "Benue",
    capital: "Makurdi",
    lat: "7.35057469939717",
    long: "8.777287699999999",
    lgas: [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer-East",
      "Gwer-West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Otukpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya",
    ],
  },
  {
    code: "BO",
    name: "Borno",
    capital: "Maiduguri",
    lat: "12.18753919959776",
    long: "13.308003399999999",
    lgas: [
      "Abadam",
      "Askira-Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala Balge",
      "Konduga",
      "Kukawa",
      "Kwaya-Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani",
    ],
  },
  {
    code: "CR",
    name: "CrossRiver",
    capital: "Calabar",
    lat: "5.867196599451846",
    long: "8.5204774",
    lgas: [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar-Municipal",
      "Calabar-South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakurr",
      "Yala",
    ],
  },
  {
    code: "DE",
    name: "Delta",
    capital: "Asaba",
    lat: "5.527306099471514",
    long: "6.178416699999999",
    lgas: [
      "Aniocha North",
      "Aniocha-North",
      "Aniocha-South",
      "Bomadi",
      "Burutu",
      "Ethiope-East",
      "Ethiope-West",
      "Ika-North-East",
      "Ika-South",
      "Isoko-North",
      "Isoko-South",
      "Ndokwa-East",
      "Ndokwa-West",
      "Okpe",
      "Oshimili-North",
      "Oshimili-South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli-North",
      "Ughelli-South",
      "Ukwuani",
      "Uvwie",
      "Warri South-West",
      "Warri North",
      "Warri South",
    ],
  },
  {
    code: "EB",
    name: "Ebonyi",
    capital: "Abakaliki",
    lat: "6.199691799435065",
    long: "8.0348906",
    lgas: [
      "Abakaliki",
      "Afikpo-North",
      "Afikpo South (Edda)",
      "Ebonyi",
      "Ezza-North",
      "Ezza-South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Ohaukwu",
      "Onicha",
    ],
  },
  {
    code: "ED",
    name: "Edo",
    capital: "Benin City",
    lat: "6.607657499417959",
    long: "5.9722713",
    lgas: [
      "Akoko Edo",
      "Egor",
      "Esan-Central",
      "Esan-North-East",
      "Esan-South-East",
      "Esan-West",
      "Etsako-Central",
      "Etsako-East",
      "Etsako-West",
      "Igueben",
      "Ikpoba-Okha",
      "Oredo",
      "Orhionmwon",
      "Ovia-North-East",
      "Ovia-South-West",
      "Owan East",
      "Owan-West",
      "Uhunmwonde",
    ],
  },
  {
    code: "EK",
    name: "Ekiti",
    capital: "Ado-Ekiti",
    lat: "7.736890999391845",
    long: "5.2738326",
    lgas: [
      "Ado-Ekiti",
      "Efon",
      "Ekiti-East",
      "Ekiti-South-West",
      "Ekiti-West",
      "Emure",
      "Gbonyin",
      "Ido-Osi",
      "Ijero",
      "Ikere",
      "Ikole",
      "Ilejemeje",
      "Irepodun Ifelodun",
      "Ise-Orun",
      "Moba",
      "Oye",
    ],
  },
  {
    code: "EN",
    name: "Enugu",
    capital: "Enugu",
    lat: "6.553609399419997",
    long: "7.4143061",
    lgas: [
      "Aninri",
      "Awgu",
      "Enugu-East",
      "Enugu-North",
      "Enugu-South",
      "Ezeagu",
      "Igbo-Etiti",
      "Igbo-Eze-North",
      "Igbo-Eze-South",
      "Isi-Uzo",
      "Nkanu-East",
      "Nkanu-West",
      "Nsukka",
      "Oji-River",
      "Udenu",
      "Udi",
      "Uzo-Uwani",
    ],
  },
  {
    code: "GO",
    name: "Gombe",
    capital: "Gombe",
    lat: "10.383009999458512",
    long: "11.206567",
    lgas: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu Deba",
    ],
  },
  {
    code: "IM",
    name: "Imo",
    capital: "Owerri",
    lat: "5.585945599467946",
    long: "7.0669651",
    lgas: [
      "Aboh-Mbaise",
      "Ahiazu-Mbaise",
      "Ehime-Mbano",
      "Ezinihitte",
      "Ideato-North",
      "Ideato-South",
      "Ihitte Uboma",
      "Ikeduru",
      "Isiala-Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor-Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji-Egbema",
      "Okigwe",
      "Onuimo",
      "Orlu",
      "Orsu",
      "Oru-East",
      "Oru-West",
      "Owerri-Municipal",
      "Owerri-North",
      "Owerri-West",
    ],
  },
  {
    code: "JI",
    name: "Jigawa",
    capital: "Dutse",
    lat: "12.325236199610885",
    long: "9.510329599999999",
    lgas: [
      "Auyo",
      "Babura",
      "Biriniwa",
      "Birnin-Kudu",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin-Hausa",
      "Kaugama",
      "Kazaure",
      "Kiri kasama",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Ringim",
      "Roni",
      "Sule-Tankarkar",
      "Taura",
      "Yankwashi",
    ],
  },
  {
    code: "KD",
    name: "Kaduna",
    capital: "Kaduna",
    lat: "10.382531799458487",
    long: "7.853322600000001",
    lgas: [
      "Birnin-Gwari",
      "Chikun",
      "Giwa",
      "Igabi",
      "Ikara",
      "Jaba",
      "Jema'A",
      "Kachia",
      "Kaduna-North",
      "Kaduna-South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon-Gari",
      "Sanga",
      "Soba",
      "Zangon-Kataf",
      "Zaria",
    ],
  },
  {
    code: "KN",
    name: "Kano",
    capital: "Kano",
    lat: "11.894838899570903",
    long: "8.5364136",
    lgas: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin-Kudu",
      "Dawakin-Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun-Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano-Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin-Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takai",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun-Wada",
      "Ungogo",
      "Warawa",
      "Wudil",
    ],
  },
  {
    code: "KT",
    name: "Katsina",
    capital: "Kastina",
    lat: "12.563082499634245",
    long: "7.6207063",
    lgas: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dan-Musa",
      "Dandume",
      "Danja",
      "Daura",
      "Dutsi",
      "Dutsin-Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai-Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango",
    ],
  },
  {
    code: "KE",
    name: "Kebbi",
    capital: "Birnin-Kebbi",
    lat: "11.416757399530335",
    long: "4.107454499999999",
    lgas: [
      "Aleiro",
      "Arewa-Dandi",
      "Argungu",
      "Augie",
      "Bagudo",
      "Birnin-Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko-Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu/Danko",
      "Yauri",
      "Zuru",
    ],
  },
  {
    code: "KO",
    name: "Kogi",
    capital: "Lokoja",
    lat: "7.79496019939138",
    long: "6.686866899999999",
    lgas: [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela-Odolu",
      "Ijumu",
      "Kabba Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro",
      "Ofu",
      "Ogori Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Oyi",
      "Yagba-East",
      "Yagba-West",
    ],
  },
  {
    code: "KW",
    name: "Kwara",
    capital: "Ilorin",
    lat: "8.836789099397848",
    long: "4.668848699999999",
    lgas: [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti (Araromi/Opin)",
      "Ilorin-East",
      "Ilorin-South",
      "Ilorin-West",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke-Ero",
      "Oyun",
      "Pategi",
    ],
  },
  {
    code: "LA",
    name: "Lagos",
    capital: "Ikeja",
    lat: "6.526903299421034",
    long: "3.5774005",
    lgas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos-Island",
      "Lagos-Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere",
      "Yewa-South",
    ],
  },
  {
    code: "NA",
    name: "Nassarawa",
    capital: "Lafia",
    lat: "8.438786799392046",
    long: "8.238284899999998",
    lgas: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Kokona",
      "Lafia",
      "Nasarawa",
      "Nasarawa-Eggon",
      "Obi",
      "Wamba",
      "Toto",
    ],
  },
  {
    code: "NI",
    name: "Niger",
    capital: "Minna",
    lat: "9.932608299434758",
    long: "5.651108799999999",
    lgas: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Magama",
      "Mariga",
      "Mashegu",
      "Mokwa",
      "Moya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi",
    ],
  },
  {
    code: "OG",
    name: "Ogun",
    capital: "Abeokuta",
    lat: "6.978858199405861",
    long: "3.4389293",
    lgas: [
      "Abeokuta-North",
      "Abeokuta-South",
      "Ado-Odo Ota",
      "Ewekoro",
      "Ifo",
      "Ijebu-East",
      "Ijebu-North",
      "Ijebu-North-East",
      "Ijebu-Ode",
      "Ikenne",
      "Imeko-Afon",
      "Ipokia",
      "Obafemi-Owode",
      "Odeda",
      "Odogbolu",
      "Ogun-Waterside",
      "Remo-North",
      "Shagamu",
      "Yewa North",
    ],
  },
  {
    code: "ON",
    name: "Ondo",
    capital: "Akure",
    lat: "7.0209685994047035",
    long: "5.0567477",
    lgas: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-West",
      "Akoko South-East",
      "Akure-North",
      "Akure-South",
      "Ese-Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Ile-Oluji-Okeigbo",
      "Irele",
      "Odigbo",
      "Okitipupa",
      "Ondo West",
      "Ondo-East",
      "Ose",
      "Owo",
    ],
  },
  {
    code: "OS",
    name: "Osun",
    capital: "Osogbo",
    lat: "7.548404699393967",
    long: "4.497830700000001",
    lgas: [
      "Atakumosa West",
      "Atakumosa East",
      "Ayedaade",
      "Ayedire",
      "Boluwaduro",
      "Boripe",
      "Ede South",
      "Ede North",
      "Egbedore",
      "Ejigbo",
      "Ife North",
      "Ife South",
      "Ife-Central",
      "Ife-East",
      "Ifelodun",
      "Ila",
      "Ilesa-East",
      "Ilesa-West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo-Otin",
      "Ola Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo",
    ],
  },
  {
    code: "OY",
    name: "Oyo",
    capital: "Ibadan",
    lat: "8.215124899390593",
    long: "3.5642896999999993",
    lgas: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibadan South-West",
      "Ibarapa-Central",
      "Ibarapa-East",
      "Ibarapa-North",
      "Ido",
      "Ifedayo",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Ogo-Oluwa",
      "Ogbomosho-North",
      "Ogbomosho-South",
      "Olorunsogo",
      "Oluyole",
      "Ona-Ara",
      "Orelope",
      "Ori-Ire",
      "Oyo-West",
      "Oyo-East",
      "Saki-East",
      "Saki-West",
      "Surulere",
    ],
  },
  {
    code: "PL",
    name: "Plateau",
    capital: "Jos",
    lat: "9.058344599402849",
    long: "9.6826289",
    lgas: [
      "Barkin-Ladi",
      "Bassa",
      "Bokkos",
      "Jos-East",
      "Jos-North",
      "Jos-South",
      "Kanam",
      "Kanke",
      "Langtang-North",
      "Langtang-South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase",
    ],
  },
  {
    code: "RI",
    name: "Rivers",
    capital: "Port-Harcourt",
    lat: "4.841602799518385",
    long: "6.8604088",
    lgas: [
      "Abua Odual",
      "Ahoada-East",
      "Ahoada-West",
      "Akuku Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Eleme",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obio Akpor",
      "Ogba-Egbema-Ndoni",
      "Ogba Egbema Ndoni",
      "Ogu Bolo",
      "Okrika",
      "Omuma",
      "Opobo Nkoro",
      "Oyigbo",
      "Port-Harcourt",
      "Tai",
    ],
  },
  {
    code: "SO",
    name: "Sokoto",
    capital: "Sokoto",
    lat: "13.061119499685718",
    long: "5.3152203",
    lgas: [
      "Binji",
      "Bodinga",
      "Dange-Shuni",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto-North",
      "Sokoto-South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
    ],
  },
  {
    code: "TA",
    name: "Taraba",
    capital: "Jalingo",
    lat: "8.0141333993904",
    long: "10.737633599999999",
    lgas: [
      "Ardo-Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim-Lamido",
      "Kurmi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing",
    ],
  },
  {
    code: "YO",
    name: "Yobe",
    capital: "Damaturu",
    lat: "12.123324199591742",
    long: "11.506593699999998",
    lgas: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari",
    ],
  },
  {
    code: "ZA",
    name: "Zamfara",
    capital: "Gusau",
    lat: "12.007899799581104",
    long: "6.4191432",
    lgas: [
      "Anka",
      "Bakura",
      "Birnin Magaji/Kiyaw",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Isa",
      "Kaura-Namoda",
      "Kiyawa",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata-Mafara",
      "Tsafe",
      "Zurmi",
    ],
  },
];
const cities = ref(states[0].lgas);

const address = reactive({
  state: states[0].name,
  area: cities.value[0],
  bustop: null,
  street: null,
  address: null,
});

const paymentOption = ref("card");

watch(
  () => address.state,
  (state) => {
    states.forEach((st) => {
      if (st.name == state) {
        cities.value = st.lgas;
        address.area = "------select------";
      }
    });
  }
);

const cartProducts = CartItems.map((item) => {
  return {
    product_id: item.id,
    quantity: item.quantity,
  };
});

async function checkout() {
  const data = {
    order: cartProducts,
    addressType: 'new',
    address: address,
  }
  isLoading.value = true

  try{
    const res = await $fetch<any>('/api/main/checkout', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (res.statusCode === 201) {
      localStorage.removeItem('cart')
      return location.href = res.payLink
    }
  }catch {

  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  console.log(cartProducts);
});
</script>

<style scoped></style>
