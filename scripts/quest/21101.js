importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("#b(You need to think about this for a second...)#k");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendYesNo("#b(����ȷ���Լ��ǲ���ʹ��#p1201001#��Ӣ�ۣ�ʹ��ץס#p1201001#���ԣ��϶�����ʲô��ӳ�ġ�)#k");
		} else if (status == 1) {
			if (qm.getPlayer().getJob().getId() == 2000) {
				qm.updateQuest(21101, "create@");
				qm.completeQuest();
				qm.getPlayer().changeJob(net.sf.odinms.client.MapleJob.Ares_1);
				qm.getPlayer().setStr(35);
				qm.getPlayer().setDex(4);
				qm.getPlayer().setRemainingAp((qm.getPlayer().getLevel() - 1) * 5 - 22);
				qm.getPlayer().setRemainingSp((qm.getPlayer().getLevel() - 10) * 3 + 1);
				qm.getPlayer().setMaxHp(qm.getPlayer().getMaxHp() + 275);
				qm.getPlayer().setMaxMp(qm.getPlayer().getMaxMp() + 15);
				qm.getPlayer().changeSkillLevel(net.sf.odinms.client.SkillFactory.getSkill(20009000), 0, -1);
				qm.getPlayer().changeSkillLevel(net.sf.odinms.client.SkillFactory.getSkill(20009000), 1, 0);
				qm.sendNextPrev("#b(�ƺ���������ʲô����)#k", 3);
			}
		} else if (status == 2) {
			qm.warp(914090100);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {

}