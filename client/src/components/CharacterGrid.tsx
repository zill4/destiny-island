interface Character {
    id: string;
    name: string;
    imageUrl: string;
  }
  
  export default function CharacterGrid() {
    const characters: Character[] = [
      {
        id: '1',
        name: 'Alex Johnson',
        imageUrl: '/characters/alex-johnson.jpg'
      },
      {
        id: '2',
        name: 'Emily Chang',
        imageUrl: '/characters/emily-chang.jpg'
      },
      {
        id: '3',
        name: 'Oliver Brown',
        imageUrl: '/characters/oliver-brown.jpg'
      },
      {
        id: '4',
        name: 'Sophie Andersen',
        imageUrl: '/characters/sophie-andersen.jpg'
      },
      {
        id: '5',
        name: 'Max Lee',
        imageUrl: '/characters/max-lee.jpg'
      },
      {
        id: '6',
        name: 'Ella Roberts',
        imageUrl: '/characters/ella-roberts.jpg'
      },
      {
        id: '7',
        name: 'Jin Kim',
        imageUrl: '/characters/jin-kim.jpg'
      },
      {
        id: '8',
        name: 'Nina Stone',
        imageUrl: '/characters/nina-stone.jpg'
      }
    ];
  
    return (
      <div className="py-8">
        <div className="flex flex-wrap gap-8">
          {characters.map((character) => (
            <div 
              key={character.id}
              className="flex flex-col items-center space-y-2"
            >
              <div className="relative group">
                <img
                  src={character.imageUrl}
                  alt={character.name}
                  className="w-20 h-20 rounded-full object-cover cursor-pointer
                           transition-transform duration-200 ease-in-out
                           hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full
                              bg-black bg-opacity-0 group-hover:bg-opacity-10
                              transition-all duration-200 ease-in-out" />
              </div>
              <span className="text-sm text-gray-700">{character.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }