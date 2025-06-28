import { ReservationForm } from '@/types/reservation';
import { MENU_ITEMS } from '@/lib/config';

interface MenuSelectionProps {
  formData: Partial<ReservationForm>;
  updateFormData: (data: Partial<ReservationForm>) => void;
  onNext: () => void;
}

export default function MenuSelection({ formData, updateFormData, onNext }: MenuSelectionProps) {
  const handleMenuSelect = (menuId: string) => {
    updateFormData({ menuId });
  };

  const handleNext = () => {
    if (formData.menuId) {
      onNext();
    }
  };

  const getMenuCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'border-blue-200 hover:border-blue-400 bg-blue-50';
      case 'postnatal': return 'border-pink-200 hover:border-pink-400 bg-pink-50';
      case 'eye-care': return 'border-green-200 hover:border-green-400 bg-green-50';
      default: return 'border-gray-200 hover:border-gray-400 bg-gray-50';
    }
  };

  const getSelectedStyle = (menuId: string) => {
    return formData.menuId === menuId 
      ? 'border-blue-500 bg-blue-100 ring-2 ring-blue-200' 
      : '';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          施術メニューを選択してください
        </h2>
        <p className="text-gray-600">
          ご希望の施術内容をお選びください
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MENU_ITEMS.map((menu) => (
          <div
            key={menu.id}
            onClick={() => handleMenuSelect(menu.id)}
            className={`
              p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md
              ${getMenuCategoryColor(menu.category)}
              ${getSelectedStyle(menu.id)}
            `}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg text-gray-900">
                {menu.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  {menu.duration}分
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {menu.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-blue-600">
                  {menu.price === 0 ? '無料' : `¥${menu.price.toLocaleString()}`}
                </span>
                {menu.price === 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    初回限定
                  </span>
                )}
              </div>
              
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${formData.menuId === menu.id 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-300'
                }
              `}>
                {formData.menuId === menu.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 注意事項 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-bold text-yellow-800 mb-2">📋 ご予約について</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 営業時間: 平日 10:00-20:00（昼休み 14:00-15:00）</li>
          <li>• 土曜日: 10:00-13:00（昼休みなし）</li>
          <li>• 定休日: 日曜日・祝日</li>
          <li>• 予約可能期間: 本日から2週間先まで</li>
        </ul>
      </div>

      {/* 次へボタン */}
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!formData.menuId}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
            ${formData.menuId
              ? 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg transform hover:scale-105'
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
        >
          次へ進む →
        </button>
      </div>
    </div>
  );
}