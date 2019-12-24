import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	public static java.sql.Connection doConnection() throws SQLException {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			return DriverManager.getConnection("jdbc:mysql://localhost:3306/myreview?serverTimezone=UTC", "root", "root");
		} catch (ClassNotFoundException e) {
			throw new SQLException(e.getException());
		}
	}
}
