import { defineStore } from "pinia";

const useProductStore = defineStore("product", {
  state: () => ({
    count: 0,
    name: "product",
    MarkItems: [
      {
        Name: "Toshiba",
        Folder:"Toshiba",
        Id:"Toshiba",
        Products: [
          {
            Model: "VFAS3-4022PC",
            URL: "https://www.galco.com/vfas3-4022pc-tosh.html",
            Image: "VFAS3-4022PC.jpg",
          },
          {
            Model: "VFAS3-4055PC",
            URL: "https://www.galco.com/vfas3-4055pc-tosh.html",
            Image: "VFAS3-4055PC.jpg",
          },
          {
            Model: "VFAS3-4185PC",
            URL: "https://www.galco.com/vfas3-4185pc-tosh.html",
            Image: "VFAS3-4185PC.jpg",
          },
          {
            Model: "VFAS3-4750PC",
            URL: "https://www.galco.com/vfas3-4750pc-tosh.html",
            Image: "VFAS3-4750PC.jpg",
          },
          {
            Model: "VFS15-4037PL1-W1",
            URL: "https://www.galco.com/vfs15-4037pl1-w1-tosh.html",
            Image: "VFAS3-4022PC.jpg",
          },
        ],
      },
      {
        Name: "Moeller-eaton",
        Folder:"Moeller-eaton",
        Id:"Eaton",
        Products: [
          {
            Model: "031607",
            URL: "https://datasheet.eaton.com/datasheet.php?model=031607&locale=en_GB",
            Image: "031607.jpg",
          },
          {
            Model: "072737",
            URL: "https://datasheet.eaton.com/datasheet.php?model=072737&locale=en_GB&ol=es_ES",
            Image: "072737.jpg",
          },
          {
            Model: "081438",
            URL: "https://datasheet.eaton.comdatasheet.phpmodel=081438&locale=en_GB",
            Image: "081438.jpg",
          },
          {
            Model: "207297",
            URL: "https://datasheet.eaton.comdatasheet.phpmodel=207297&locale=en_GB",
            Image: "207297.jpg",
          },
          {
            Model: "266154",
            URL: "https://datasheet.eaton.com/datasheet.php?model=266154&locale=en_GB",
            Image: "266154.jpg",
          },
        ],
      },
      {
        Name: "Sick",
        Folder:"Sick",
        Id:"Sick",
        Products: [
          {
            Model: "1040764",
            URL: "https://www.sick.com/mx/es/sensores-de-proximidad-inductivos/sensores-de-proximidad-inductivos/ime/ime12-04bpszc0s/p/p228481",
            Image: "1040764.png",
          },
          {
            Model: "1057497",
            URL: "https://www.sick.com/mx/es/sensores-de-proximidad-inductivos/sensores-de-proximidad-inductivos/iqb/iq10-03bpokt0ss01/p/p324950",
            Image: "1057497.png",
          },
          {
            Model: "2029216",
            URL: "https://www.sick.com/mx/es/dol-2312-g20mma3/p/p315191",
            Image: "2029216.png",
          },
          {
            Model: "6044682",
            URL: "https://www.sick.com/mx/es/fotocelulas/fotocelulas/w250-2/wtb250-2p2441/p/p291715",
            Image: "6044682.png",
          }
        ],
      },
      {
        Name: "Contrinex",
        Folder:"Contrinex",
        Id:"Contrinex",
        Products: [
          {
            Model: "LRS-3030-103",
            URL: "https://telux.com.mx/lrs-022",
            Image: "LRS-3030-103.jpg",
          },
          {
            Model: "OSQ18-RVP6Q",
            URL: "https://telux.com.mx/osq18-rvp6q",
            Image: "OSQ18-RVP6Q.jpg",
          },
          {
            Model: "V-61",
            URL: "https://telux.com.mx/v-61",
            Image: "V-61.jpg",
          },
          {
            Model: "Z2R-400CP4",
            URL: "https://www.ramcoi.com/itemdetail/Z2R-400CP4",
            Image: "Z2R-400CP4.jpg",
          }
        ],
      },
      {
        Name: "Pepperl & Fuchs",
        Folder:"P+F",
        Id:"Pepperl",
        Products: [
          {
            Model: "209759",
            URL: "https://www.acomee.com.mx/articulo.php?search=209759&id=PEPPERL-FUCHS&pro=209759",
            Image: "209759.jpg",
          },
          {
            Model: "326161-0027",
            URL: "https://mexico.newark.com/pepperl-fuchs/nbb2-12gm50-e2-v1/inductive-proximity-sensors/dp/24C2539",
            Image: "326161-0027.webp",
          },
          {
            Model: "326161-0087",
            URL: "https://www.wolfautomation.com/inductive-proximity-sensor-18mm/",
            Image: "326161-0087.webp",
          },
          {
            Model: "70109009",
            URL: "https://www.pepperl-fuchs.com/mexico/es/classid_143.htm?view=productdetails&prodid=101071",
            Image: "70109009.png",
          }
        ],
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
export default useProductStore;
