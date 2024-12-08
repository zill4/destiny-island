interface Location {
    id: string;
    name: string;
    time: string;
    imageUrl: string;
  }
  
  export default function LocationGrid() {
    const locations: Location[] = [
      {
        id: '1',
        name: 'Paris, France',
        time: '11:15 AM',
        imageUrl: '/locations/paris.jpg'
      },
      {
        id: '2',
        name: 'Tokyo, Japan',
        time: '09:45 AM',
        imageUrl: '/locations/tokyo.jpg'
      },
      {
        id: '3',
        name: 'Destiny Island,',
        time: '08:30 AM',
        imageUrl: '/locations/destiny-island.jpg'
      }
    ];
  
    return (
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={location.imageUrl}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{location.name}</h3>
                <p className="text-sm text-gray-500">{location.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }