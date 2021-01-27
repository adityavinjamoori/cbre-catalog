const catalog = {
    title: "Order",
    items: [
      {
        item: "WorkOrder",
        imageUrl: "WorkOrder.png",
        subTitle: "PROTEIN OR VEGGIE",
        description: "helps ordering invoicing purchase orders etc",
        subItems: [
          {
            name: "WO1",
            price: "9.35",
            isLimited: true,
            imageUrl: "Picture1.png",
            description: "<<<<Help Text >>>>"
          },
          {
            name: "WO2",
            price: "19.35",
            imageUrl: "CHIKEN",
            description: "<<<<Help Text >>>>"
          },
          {
            name: "WO3",
            price: "10.20",
            imageUrl: "STEAK",
            description: "<<<<Help Text >>>>"
          }
        ]
      },
      {
        item: "Property",
        imageUrl: "Property.png",
        subTitle: "Operational-sub",
        description: "<<<<Help Text >>>>",
        subItems: [
          {
            name: "P1",
            price: "9.35",
  
            isLimited: true,
            imageUrl: "CARNE_ASADA",
            description: "<<<<Help Text >>>>"
          },
          {
            name: "P2",
            price: "19.35",
  
            imageUrl: "CHIKEN",
            description: "<<<<Help Text >>>>"
          },
          {
            name: "P3",
            price: "10.20",
  
            imageUrl: "STEAK",
            description: "<<<<Help Text >>>>"
          }
        ]
      }
    ]
  };
  
  export default catalog;
  