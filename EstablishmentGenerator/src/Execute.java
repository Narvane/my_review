

import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

public class Execute {

	public static void main(String[] args) {
		String amount;
		List<String> districts = new ArrayList<>();
		
		Integer endLoop = 1;
		EstablishmentDAO dao = new EstablishmentDAO();


		amount  = JOptionPane.showInputDialog("Quantidade de restaurantes: ");
		
		while (endLoop != 0) {
			String district  = JOptionPane.showInputDialog("Digite um bairro desejado: ");
			if(dao.districtExists(district)) {
				districts.add(district);
			}
			int proceed =  JOptionPane.showConfirmDialog(null, "Adicionar mais?");
			if (proceed == 1) {
				dao.establishmentGenerator(amount, districts);
				endLoop = 0;
			}
		}
		
	}

}
