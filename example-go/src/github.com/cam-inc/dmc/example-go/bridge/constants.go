package bridge

const (
	ColorRed   = "red"   // Endpoint Color,
	ColorBlue  = "blud"  // Endpoint Color,
	ColorGreen = "green" // Endpoint Color,

	StyleList                      = "list"   // WebComponent リスト表示
	StyleTable                     = "table"  // WebComponent テーブル表示
	StyleNumber                    = "number" // WebComponent 数字表示
	StyleGraphScatterplot          = "graph-scatterplot"
	StyleGraphLine                 = "graph-line"
	StyleGraphBar                  = "graph-bar"
	StyleGraphHorizontalBar        = "graph-horizontal-bar"
	StyleGraphStackedBar           = "graph-stacked-bar"
	StyleGraphHorizontalStackedBar = "graph-horizontal-stacked-bar"
	StyleGraphStackedArea          = "graph-stacked-area"

	GroupEmpty = ""      // グループなし
	GroupKPI   = "kpi"   // KPI
	GroupUser  = "user"  // ユーザ
	GroupBlog  = "blog"  // ブログ
	GroupAdmin = "admin" // 管理権限

	SectionDashboard = "dashboard" // ダッシュボードセクション
	SectionManage    = "manage"    // 管理セクション

	JwtClaims = "claims" // JWT claims

	UserMale        = "male"
	UserFemale      = "female"
	UserBloodTypeA  = "A"
	UserBloodTypeB  = "B"
	UserBloodTypeO  = "O"
	UserBloodTypeAB = "AB"

	BlogDesignSimple  = "simple"
	BlogDesignTile    = "tile"
	BlogDesign2Column = "2column"
	BlogDesign3Column = "3column"
)