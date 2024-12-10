// script.js
class PokemonApp {
    constructor() {
        this.initElements();
        this.initEventListeners();
        this.loadData();
    }

    // 初始化DOM元素
    initElements() {
        this.searchInput = document.querySelector('.search-input');
        this.pokemonGrid = document.querySelector('.pokemon-grid');
        this.typeFilters = document.querySelector('.type-filters-grid');
        this.importBtn = document.getElementById('importBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.activeModal = null; // 追踪当前打开的模态框
    }

    // 初始化事件监听
    initEventListeners() {
        // 搜索功能
        this.searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        // 导入导出功能
        this.importBtn?.addEventListener('click', () => this.handleImport());
        this.exportBtn?.addEventListener('click', () => this.handleExport());
        
        // 点击卡片显示详情
        this.pokemonGrid?.addEventListener('click', (e) => {
            const card = e.target.closest('.pokemon-card');
            if (card) {
                const id = card.dataset.id;
                this.showDetails(id);
            }
        });

        // 全局ESC键监听
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal(this.activeModal);
            }
        });
    }

// 加载数据
loadData() {
    try {
        console.log('Loading data:', window.pokemonData);
        this.pokemonData = window.pokemonData || {};
        
        // 检查数据是否为空
        if (Object.keys(this.pokemonData).length === 0) {
            console.log('No Pokemon data available');
            this.pokemonGrid.innerHTML = '<div class="no-data">暂无数据</div>';
            return;
        }

        // 重新渲染类型过滤器
        this.renderTypeFilters();
        
        // 重新渲染宝可梦网格
        const allPokemon = Object.values(this.pokemonData);
        console.log('Rendering pokemon:', allPokemon);
        this.renderPokemonGrid(allPokemon);
        
    } catch (error) {
        console.error('Error loading data:', error);
        this.showErrorMessage('数据加载失败，请刷新页面重试');
    }
}

    // 显示错误信息
    showErrorMessage(message) {
        if (this.pokemonGrid) {
            this.pokemonGrid.innerHTML = `
                <div class="error-message">
                    <p>⚠️ ${message}</p>
                </div>
            `;
        }
    }

    // 渲染属性筛选器
    renderTypeFilters() {
        // 获取所有唯一属性
        const types = [...new Set(Object.values(this.pokemonData)
            .flatMap(pokemon => pokemon.dexEntry.types))];

        // 生成筛选器HTML
        const filterHTML = types.map(type => `
            <button class="type-btn" 
                    data-type="${type}"
                    style="background-color: ${window.typeColors[type]}"
                    onclick="app.filterByType('${type}')">
                ${this.getTypeNameChinese(type)}
            </button>
        `).join('');

        if (this.typeFilters) {
            this.typeFilters.innerHTML = `
                <button class="type-btn active" 
                        data-type="all"
                        onclick="app.filterByType('all')">
                    全部
                </button>
                ${filterHTML}
            `;
        }
    }

    // 渲染宝可梦网格
    renderPokemonGrid(pokemons) {
        if (!this.pokemonGrid) return;

        if (!pokemons || pokemons.length === 0) {
            this.pokemonGrid.innerHTML = '<div class="no-data">暂无符合条件的宝可梦</div>';
            return;
        }

        this.pokemonGrid.innerHTML = pokemons.map(pokemon => `
            <div class="pokemon-card" data-id="${pokemon.id}">
                <div class="card-header">
                    <h3 class="pokemon-name">${pokemon.name}</h3>
                    <span class="pokemon-number">#${pokemon.id}</span>
                </div>
                <div class="pokemon-types">
                    ${pokemon.dexEntry.types.map(type => `
                        <span class="type-badge" 
                              style="background-color: ${window.typeColors[type]}">
                            ${this.getTypeNameChinese(type)}
                        </span>
                    `).join('')}
                </div>
                <div class="pokemon-info">
                    <p class="pokemon-category">${pokemon.dexEntry.category}</p>
                    <div class="pokemon-stats">
                        <div class="stat-item">
                            <span class="stat-label">身高</span>
                            <span class="stat-value">${pokemon.dexEntry.height}m</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">体重</span>
                            <span class="stat-value">${pokemon.dexEntry.weight}kg</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 显示详情
    showDetails(id) {
        const pokemon = this.pokemonData[id];
        if (!pokemon) return;

        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = this.generateModalContent(pokemon);
        document.body.appendChild(modal);

        // 阻止背景滚动
        document.body.style.overflow = 'hidden';

        // 设置为当前活动模态框
        this.activeModal = modal;

        // 添加动画和显示
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });

        // 事件处理
        this.setupModalEventListeners(modal);
    }

    // 设置模态框事件监听
    setupModalEventListeners(modal) {
        // 阻止模态框内容的点击事件冒泡
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        // 关闭按钮点击事件
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal(modal);
            });
        }
    }

    // 关闭模态框
    closeModal(modal) {
        modal.classList.remove('active');
        // 恢复背景滚动
        document.body.style.overflow = '';
        // 动画结束后移除元素
        setTimeout(() => {
            modal.remove();
            this.activeModal = null;
        }, 300);
    }

    // 生成能力值HTML
    generateStatsHTML(stats) {
        return Object.entries(stats)
            .filter(([key]) => key !== 'total')
            .map(([key, value]) => `
                <div class="stat-bar-container">
                    <div class="stat-label">
                        <span>${this.getStatNameChinese(key)}</span>
                        <span>${value}</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill" style="width: ${(value/255)*100}%"></div>
                    </div>
                </div>
            `).join('');
    }

    // 生成模态框内容
    generateModalContent(pokemon) {
        return `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h2>${pokemon.name}</h2>
                        <span class="pokemon-number">#${pokemon.id}</span>
                    </div>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <!-- 基本信息 -->
                    <div class="detail-section">
                        <h3>图鉴信息</h3>
                        <p class="pokemon-description">${pokemon.dexEntry.description}</p>
                        <div class="basic-info">
                            <p><strong>分类：</strong>${pokemon.dexEntry.category}</p>
                            <p><strong>身高：</strong>${pokemon.dexEntry.height}m</p>
                            <p><strong>体重：</strong>${pokemon.dexEntry.weight}kg</p>
                            <div class="pokemon-types">
                                <strong>属性：</strong>
                                ${pokemon.dexEntry.types.map(type => `
                                    <span class="type-badge" 
                                          style="background-color: ${window.typeColors[type]}">
                                        ${this.getTypeNameChinese(type)}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- 能力值 -->
                    <div class="detail-section">
                        <h3>能力值</h3>
                        <div class="stats-container">
                            ${this.generateStatsHTML(pokemon.stats)}
                        </div>
                    </div>

                    <!-- 特性 -->
                    <div class="detail-section">
                        <h3>特性</h3>
                        <div class="abilities-info">
                            <div class="ability-item">
                                <strong>普通特性：</strong>
                                ${pokemon.abilities.normal.join('、')}
                            </div>
                            ${pokemon.abilities.hidden ? `
                                <div class="ability-item">
                                    <strong>隐藏特性：</strong>
                                    ${pokemon.abilities.hidden.name}
                                    <p class="ability-description">${pokemon.abilities.hidden.description}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <!-- 招式列表 -->
                    <div class="detail-section">
                        <h3>招式列表</h3>
                        <div class="moves-section">
                            <h4>初始招式</h4>
                            <div class="moves-grid">
                                ${pokemon.moves.initial.map(move => this.generateMoveCard(move)).join('')}
                            </div>
                            
                            <h4>等级招式</h4>
                            <div class="moves-grid">
                                ${pokemon.moves.levelUp.map(move => this.generateMoveCard(move)).join('')}
                            </div>
                        </div>
                    </div>

            <!-- 特征和生活习性 -->
            <div class="detail-section">
                <h3>特征与习性</h3>
                <div class="features-list">
                    ${pokemon.features.map(feature => `
                        <div class="feature-item">• ${feature}</div>
                    `).join('')}
                </div>
                <div class="habitat-info">
                    <p>${pokemon.habitat.description}</p>
                    <p><strong>栖息地：</strong>${pokemon.habitat.locations.join('、')}</p>
                    <p><strong>稀有度：</strong>${pokemon.habitat.rarity}</p>
                    ${pokemon.habitat.warning ? `<p class="warning-text">⚠️ ${pokemon.habitat.warning}</p>` : ''}
                </div>
            </div>

            <!-- 训练建议 -->
            <div class="detail-section">
                <h3>训练建议</h3>
                <div class="tips-list">
                    ${pokemon.training.tips.map(tip => `
                        <div class="tip-item">• ${tip}</div>
                    `).join('')}
                </div>
            </div>

                    <!-- 进化信息 -->
                    ${pokemon.evolution ? `
                        <div class="detail-section">
                            <h3>进化信息</h3>
                            <div class="evolution-chain">
                                <div class="evolution-stage current">
                                    <div class="stage-info">
                                        <span class="stage-name">${pokemon.evolution.current.name}</span>
                                        <span class="stage-number">#${pokemon.evolution.current.id}</span>
                                    </div>
                                </div>
                                ${pokemon.evolution.next ? `
                                    <div class="evolution-arrow">
                                        <span>→</span>
                                        <div class="evolution-condition">${pokemon.evolution.next.condition}</div>
                                    </div>
                                    <div class="evolution-stage">
                                        <div class="stage-info">
                                            <span class="stage-name">${pokemon.evolution.next.name}</span>
                                            <span class="stage-number">#${pokemon.evolution.next.id}</span>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    ` : ''}

                    <!-- 趣闻轶事 -->
                    <div class="detail-section">
                        <h3>趣闻轶事</h3>
                        <div class="trivia-list">
                            ${pokemon.trivia.map(item => `
                                <div class="trivia-item">• ${item}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 生成招式卡片
    generateMoveCard(move) {
        return `
            <div class="move-card">
                <div class="move-header">
                    <span class="move-name">${move.name}</span>
                    ${move.level ? `<span class="move-level">Lv.${move.level}</span>` : ''}
                </div>
                <span class="type-badge" style="background-color: ${window.typeColors[move.type]}">
                    ${this.getTypeNameChinese(move.type)}
                </span>
                <div class="move-stats">
                    <div class="move-stat">
                        <div class="move-stat-label">威力</div>
                        <div class="move-stat-value">${move.power || '-'}</div>
                    </div>
                    <div class="move-stat">
                        <div class="move-stat-label">命中</div>
                        <div class="move-stat-value">${move.accuracy || '-'}</div>
                    </div>
                    <div class="move-stat">
                        <div class="move-stat-label">PP</div>
                        <div class="move-stat-value">${move.pp}</div>
                    </div>
                </div>
                <div class="move-description">${move.description}</div>
            </div>
        `;
    }

    // 搜索处理
    handleSearch(value) {
        const searchTerm = value.toLowerCase().trim();
        const filtered = Object.values(this.pokemonData).filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchTerm) ||
            pokemon.id.includes(searchTerm)
        );
        this.renderPokemonGrid(filtered);
    }

    // 属性筛选
    filterByType(type) {
        const buttons = document.querySelectorAll('.type-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-type="${type}"]`)?.classList.add('active');
        const filtered = type === 'all' 
            ? Object.values(this.pokemonData)
            : Object.values(this.pokemonData).filter(pokemon => 
                pokemon.dexEntry.types.includes(type)
            );
        
        this.renderPokemonGrid(filtered);
    }

handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    // First try to safely parse the JSON
                    let importedData;
                    try {
                        importedData = JSON.parse(event.target.result);
                    } catch (parseError) {
                        console.error('Detailed parse error:', parseError);
                        // Log the problematic content around the error position
                        const content = event.target.result;
                        const errorPosition = parseError.message.match(/position (\d+)/)?.[1];
                        if (errorPosition) {
                            const start = Math.max(0, parseInt(errorPosition) - 50);
                            const end = Math.min(content.length, parseInt(errorPosition) + 50);
                            console.log('Content around error:', content.slice(start, end));
                        }
                        throw new Error(`JSON parsing failed: ${parseError.message}`);
                    }

                    // Validate the parsed data
                    if (this.validatePokemonData(importedData)) {
                        // Merge the data instead of replacing
                        this.pokemonData = {
                            ...this.pokemonData,
                            ...importedData
                        };
                        // Update global data
                        window.pokemonData = this.pokemonData;
                        this.loadData();
                        this.showToast('数据导入成功！');
                    } else {
                        throw new Error('Invalid Pokemon data structure');
                    }
                } catch (error) {
                    console.error('Import processing error:', error);
                    this.showToast(`导入失败：${error.message}`, 'error');
                }
            };

            // Add error handler for FileReader
            reader.onerror = (error) => {
                console.error('FileReader error:', error);
                this.showToast('导入失败：文件读取错误', 'error');
            };

            reader.readAsText(file, 'utf-8'); // Explicitly specify UTF-8 encoding
        } catch (error) {
            console.error('Import setup error:', error);
            this.showToast('导入失败：文件处理错误', 'error');
        }
    };
    input.click();
}
    // 验证导入的数据格式
    validatePokemonData(data) {
        if (!data || typeof data !== 'object') return false;
        
        try {
            for (const id in data) {
                const pokemon = data[id];
                // 检查必要字段
                if (!pokemon.name || !pokemon.id || !pokemon.dexEntry) return false;
                if (!pokemon.dexEntry.types || !Array.isArray(pokemon.dexEntry.types)) return false;
                if (!pokemon.stats || typeof pokemon.stats !== 'object') return false;
            }
            return true;
        } catch (error) {
            console.error('Validation error:', error);
            return false;
        }
    }

handleExport() {
    try {
        // 生成 data.js 格式的内容
        const dataStr = `// data.js
const typeColors = ${JSON.stringify(window.typeColors, null, 2)};

const pokemonData = ${JSON.stringify(this.pokemonData, null, 2)};

// 导出变量到全局作用域
window.typeColors = typeColors;
window.pokemonData = pokemonData;`;

        // 创建下载
        const blob = new Blob([dataStr], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast('数据导出成功！请用导出的文件替换原有的 data.js');
    } catch (error) {
        console.error('Export error:', error);
        this.showToast('导出失败：' + error.message, 'error');
    }
}

    // 显示提示信息
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // 添加动画类
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // 3秒后移除
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // 获取属性中文名
    getTypeNameChinese(type) {
        const typeNames = {
            normal: '一般',
            fire: '火',
            water: '水',
            grass: '草',
            electric: '电',
            ice: '冰',
            fighting: '格斗',
            poison: '毒',
            ground: '地面',
            flying: '飞行',
            psychic: '超能力',
            bug: '虫',
            rock: '岩石',
            ghost: '幽灵',
            dragon: '龙',
            dark: '恶',
            steel: '钢',
            fairy: '妖精'
        };
        return typeNames[type] || type;
    }

    // 获取能力值中文名
    getStatNameChinese(stat) {
        const statNames = {
            hp: 'HP',
            attack: '攻击',
            defense: '防御',
            spAtk: '特攻',
            spDef: '特防',
            speed: '速度'
        };
        return statNames[stat] || stat;
    }

    // 错误处理
    handleError(error, message = '操作失败') {
        console.error(error);
        this.showToast(message, 'error');
    }

    // 清理资源
    destroy() {
        // 移除所有事件监听器
        if (this.searchInput) {
            this.searchInput.removeEventListener('input', this.handleSearch);
        }
        if (this.importBtn) {
            this.importBtn.removeEventListener('click', this.handleImport);
        }
        if (this.exportBtn) {
            this.exportBtn.removeEventListener('click', this.handleExport);
        }
        
        // 关闭打开的模态框
        if (this.activeModal) {
            this.closeModal(this.activeModal);
        }

        // 清除任何定时器
        this.clearAllTimeouts();
    }

    // 清除所有定时器
    clearAllTimeouts() {
        const highestTimeoutId = setTimeout(() => {});
        for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PokemonApp();
});

// 页面卸载前清理资源
window.addEventListener('beforeunload', () => {
    if (window.app) {
        window.app.destroy();
    }
});