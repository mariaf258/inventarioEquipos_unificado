function generateColorFromString(text: string): string {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        const color = `#${((hash >> 24) & 0xFF).toString(16).padStart(2, '0')}`
                    + `${((hash >> 16) & 0xFF).toString(16).padStart(2, '0')}`
                    + `${((hash >> 8) & 0xFF).toString(16).padStart(2, '0')}`;
        
        return color.substring(0, 7);
    }
    



<div v-for="module in modules" :key="module.name" :style="{ backgroundColor: module.color }">
  {{ module.name }}
</div>
