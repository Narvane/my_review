import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


public class EstablishmentDAO {
	private Connection connection;
	
	public boolean districtExists(String districtName) {
		String sql = "SELECT dst_name FROM dst_districts WHERE dst_name = ?";
		
		try {
			connection = ConnectionFactory.doConnection();
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setString(1, districtName);

			ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				return true;
			}
			
			connection.close();
			stmt.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	public void establishmentGenerator(String amount, List<String> districts) {
		String sql = "INSERT INTO est_establishments(est_name, est_cnpj, dst_id, est_number, est_description, est_stars) VALUES (?, ?, ?, ?, ?, ?);";
		for (int i = 0; i < Integer.parseInt(amount); i++) {
			try {
				connection = ConnectionFactory.doConnection();
				PreparedStatement stmt = connection.prepareStatement(sql);
				stmt.setString(1, randomName());
				stmt.setString(2, randomCnpj());
				stmt.setInt(3, randomDistrict(districts));
				stmt.setInt(4, randomNumber());
				stmt.setString(5, randomDescription());
				stmt.setDouble(6, randomStars());
				
				stmt.executeUpdate();
				connection.close();
				stmt.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public String randomName() {
		List<String> prenames = new ArrayList<>();
		
		String s1 = "Delicias";
		String s2 = "Sabor";
		String s3 = "Tempero";
		String s4 = "Taste";
		String s5 = "Bom";
		String s6 = "Delicioso";
		String s7 = "Fantastico";
		String s8 = "Guloseima";
		String s9 = "Gula";
		String s10 = "Sensação";
		String s11 = "Tropical";
		String s12 = "Fermento";
		String s13 = "Fabuloso";
		String s14 = "Delicioso";
		String s15 = "Glamuroso";
		String s16 = "Cremoso";
		String s17 = "Incrível";
		
		prenames.add(s1);
		prenames.add(s2);
		prenames.add(s3);
		prenames.add(s4);
		prenames.add(s5);
		prenames.add(s6);
		prenames.add(s7);
		prenames.add(s8);
		prenames.add(s9);
		prenames.add(s10);
		prenames.add(s11);
		prenames.add(s12);
		prenames.add(s13);
		prenames.add(s14);
		prenames.add(s15);
		prenames.add(s16);
		prenames.add(s17);
		
		String s18 = "Caseiras";
		String s19 = "Sabor";
		String s20 = "Gula";
		String s21 = "Tropical";
		String s22 = "Sensação";
		String s23 = "Fermento";
		String s24 = "da Casa";
		String s25 = "do Mundo";
		String s26 = "do Jardim";
		String s27 = "do Campo";
		String s28 = "do Horizonte";
		String s29 = "do Brasil";
		String s30 = "do Mar";
		String s31 = "do Lar";
		
		List<String> afternames = new ArrayList<>();
		afternames.add(s18);
		afternames.add(s19);
		afternames.add(s20);
		afternames.add(s21);
		afternames.add(s22);
		afternames.add(s23);
		afternames.add(s24);
		afternames.add(s25);
		afternames.add(s26);
		afternames.add(s27);
		afternames.add(s28);
		afternames.add(s29);
		afternames.add(s30);
		afternames.add(s31);
		
		Random r = new Random();
		String prename = prenames.get(r.nextInt(prenames.size()));
		String afterName = afternames.get(r.nextInt(afternames.size()));
		
		while (prename != afterName) {
			String name = prename + " " + afterName;
			return name;
		}
		return randomName();
	}
	public String randomCnpj() {
		Random r = new Random();
		Random r2 = new Random();
		
		int a = r.nextInt(8000000)+1000000;
		int b = r2.nextInt(8000000)+1000000;
		String total = a +""+ b;
		return total;
	}
	public Integer randomDistrict(List<String> districts) {
		List<Integer> districtsIds = new ArrayList<>();
		String sql = "SELECT dst_id FROM dst_districts WHERE dst_name = ?";
		try {
			connection = ConnectionFactory.doConnection();
			PreparedStatement stmt = connection.prepareStatement(sql);
			for (int i = 0; i < districts.size(); i++) {
				stmt.setString(1, districts.get(i));
				
				ResultSet rs = stmt.executeQuery();
				if (rs.next()) {
					districtsIds.add(rs.getInt("dst_id"));
				}
			}
			connection.close();
			stmt.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		Random r = new Random();
		return districtsIds.get(r.nextInt(districtsIds.size()));

	}
	public Integer randomNumber() {
		Random r = new Random();
		return r.nextInt(9999);
	}
	public String randomDescription() {
		return "Nice Place to Eat";
	}
	public Double randomStars() {
		Random r = new Random();
		String join = r.nextInt(5) + "." + r.nextInt(5);
		return Double.valueOf(join);
	}
	
}
